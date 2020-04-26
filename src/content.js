// extract
const value = extractInt(document.body.querySelector("span.ds-value").innerHTML);
const hoa = getValue("span", "HOA fees");
const taxes = getValue("span", "Property taxes");
const insurance = getValue("span", "Home insurance");
const address = getAddress();

//
const annualExpenses = (hoa + taxes + insurance) * 12;

chrome.runtime.sendMessage({
  url: window.location.href,
  value,
  hoa,
  taxes,
  insurance,
  annualExpenses,
  address
})

/**
 * Returns the next element after the one with the given text
 * @param {string} selector e.g. Div
 * @param {string} prefixString e.g. Property Value
 */
function getValue(selector, prefixString) {
  var elements = document.querySelectorAll(selector);
  let found;
  for (let i=0; i<elements.length; i++) {
    if (elements[i].textContent.startsWith(prefixString)) {
      found = elements[i];
      break;
    }
  }

  return extractInt(found.nextSibling.innerHTML);
}

function extractInt(stringValue) {
  const numbers = RegExp(/(\d+)/i);
  const stringifiedNumber = stringValue.match(numbers)[0];
  return parseInt(stringifiedNumber);
}

function getAddress() {
  const addressParent = document.getElementsByClassName("ds-address-container")[0];
  let address = addressParent.children[0].innerHTML + addressParent.children[1].innerHTML;
  debugger;
  address = removePartOfString(address, "<!-- -->");
  address = removePartOfString(address, "&nbsp;");
  return address;
}

function removePartOfString(input, partToRemove) {
  const index = input.indexOf(partToRemove);
  if (index != -1) {
    const length = partToRemove.length;
    return input.substr(0, index) + " " + input.substr(index + length, foo.length);
  }
  return input;
}
