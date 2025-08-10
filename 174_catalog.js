// You are given a small extract of a catalog:

// s = "<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

// <prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

// <prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

// <prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

// <prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

// ...

// (prx stands for price, qty for quantity) and an article i.e "saw".

// The function catalog(s, "saw") returns the line(s) corresponding to the article with $ before the prices:

// "table saw > prx: $1099.99 qty: 5\nsaw > prx: $9 qty: 10\n..."

// If the article is not in the catalog return "Nothing".
// Notes

//     There is a blank line between two lines of the catalog.

//     The same article may appear more than once. If that happens return all the lines concerned by the article (in the same order as in the catalog; however see below a note for Prolog language).

//     The line separator of results may depend on the language \nor \r\n. In Pascal \n is replaced by LineEnding.

//     in Perl use "£" instead of "$" before the prices.

//     You can see examples in the "Sample tests".

// Note for Prolog language

//     If the article is not in the catalog then R equals "".

//     R substrings (separated by "\n") must be in alphabetic order.
const s = `<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

<prod><name>chair</name><prx>100</prx><qty>20</qty></prod>

<prod><name>fan</name><prx>50</prx><qty>8</qty></prod>

<prod><name>wire</name><prx>10.8</prx><qty>15</qty></prod>

<prod><name>battery</name><prx>150</prx><qty>12</qty></prod>

<prod><name>pallet</name><prx>10</prx><qty>50</qty></prod>

<prod><name>wheel</name><prx>8.80</prx><qty>32</qty></prod>

<prod><name>extractor</name><prx>105</prx><qty>17</qty></prod>

<prod><name>bumper</name><prx>150</prx><qty>3</qty></prod>

<prod><name>ladder</name><prx>112</prx><qty>12</qty></prod>

<prod><name>hoist</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>platform</name><prx>65</prx><qty>21</qty></prod>

<prod><name>car wheel</name><prx>505</prx><qty>7</qty></prod>

<prod><name>bicycle wheel</name><prx>150</prx><qty>11</qty></prod>

<prod><name>big hammer</name><prx>18</prx><qty>12</qty></prod>

<prod><name>saw for metal</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>wood pallet</name><prx>65</prx><qty>21</qty></prod>

<prod><name>circular fan</name><prx>80</prx><qty>8</qty></prod>

<prod><name>exhaust fan</name><prx>62</prx><qty>8</qty></prod>

<prod><name>window fan</name><prx>62</prx><qty>8</qty></prod>`

//Params - we are given s, a string of the item that a customer wants to search for in our catalog, and we are given a catalog

//Return - We are returning a string descrbing the name of the product, the price of the product, and the quantity of the product, if there are multiple produts with the name described, we are returning multiple products separated by a /n

//Example - if an article is passed in and the s above: article = 'hoist' => "hoist > prx: $13.80 > qty: 32"

let article = 'saw'
function catalog(s, article) {
    //Psuedo
    //Break the string into individual articles
    //check each string in the array to see if it includes the article
    //now we want to slice the name, price, and quantity out of each element
    //format the three variables into a string that will be concatenated to a returnString
    let itemCount = 0
    let returnString = ''
    let articles = s.split('\n')
    articles.forEach(element => {
        if (element.includes(article)){
            itemCount += 1
            let name = element.slice(12,element.indexOf('</name>'))
            let price = element.slice(element.indexOf('<prx>') + 5,element.indexOf('</prx>'))
            let quantity = element.slice(element.indexOf('<qty>') + 5,element.indexOf('</qty>'))
            if (itemCount > 1){
                 articleString = `\r\n${name} > prx: $${price} qty: ${quantity}`
            }else{
                 articleString = `${name} > prx: $${price} qty: ${quantity}`
            }
            
            returnString+= articleString
            
        }
    });
  return returnString == '' ? 'Nothing' : returnString
}

console.log(catalog(s,article))