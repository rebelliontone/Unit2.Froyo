function countFlavors() {

// User input is split into an array of strings

    const inputElement = document.getElementById("flavorInput")
    const inputFlavors = inputElement.value;
    const flavorsArray = inputFlavors.split(",")



// An object is used to keep count of how many orders there are of each flavor

    const flavorCount = {};

// A loop is used to iterate through the array of flavors
    for (const flavor of flavorsArray) {
        const trimmedFlavor = flavor.trim();
        if (trimmedFlavor !== "") {
          if (flavorCount[trimmedFlavor]) {
            flavorCount[trimmedFlavor]++;
        } else {
            flavorCount[trimmedFlavor] = 1;
        }
      }
    }
// The console output changes depending on the user's input
    console.log("These are your chosen flavors: ");
    console.log(flavorCount);
  
}