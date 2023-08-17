
// Coupon code is matched
document.getElementById("coupon-input").addEventListener("keyup", function (e) {
    const couponCode = document.getElementById("coupon-code").innerText;
    const applyBtn = document.getElementById("discount-btn");
    if (e.target.value === couponCode) {
        applyBtn.removeAttribute("disabled");
    } else {
        applyBtn.setAttribute("disabled", true);
    }
});


// If the coupon is applied
document.getElementById("discount-btn").addEventListener("click", function (e) {

    // Regular price
    const regularPrice = parseFloat(document.getElementById("regular-price").innerText);
    // Discount percenpage
    const discountPercenpage = parseFloat(document.getElementById("discount-percenpage").innerText);

    // Calculate the discounted price
    const newPrice = discountPrice(regularPrice, discountPercenpage);

    // Update the new price
    document.getElementById("discount-price").innerText = newPrice;
});


// Calculation
function discountPrice(regularPrice, discountPercenpage) {
    return regularPrice - (regularPrice * (discountPercenpage / 100));
}