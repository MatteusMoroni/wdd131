// Product data array with product objects.
const products = [
    {
      id: "fc-1888",
      name: "Flux Capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "Power Laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "Time Circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "Low Voltage Reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "Warp Equalizer",
      averagerating: 5.0
    }
];

// Function to populate the product options in the select element.
function populateProductOptions() {
    const productNameSelect = document.getElementById("productName");
    
    // Iterate over the products array and create an option for each product.
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });
}


// Wait for the DOM to be fully loaded before running the scripts.
document.addEventListener("DOMContentLoaded", () => {
    populateProductOptions();
    setFooterInfo();
});
