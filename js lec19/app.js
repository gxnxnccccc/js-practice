let qrt = prompt("Product Amount")
var total_price = 0
for (var i = 1; i <= qrt; i++) {
    // console.log(i+1)

    // += เพิ่มข้อมูลต่อไปเรื่อยๆ
    let item_price = prompt("ราคาอาหารชิ้นที่" + i)

    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่ " + i + " ราคา " + item_price + " บาท" + "<br>"

    // since prompt data is a string type, we need to convert to integer/float first.
    // using " parseInt "    to convert to integer
    //       " parseFloat "  to convert to float
    total_price = total_price + parseInt(item_price)
}
document.getElementById("result").innerHTML = "ราคารวมทั้งหมด " + total_price + " บาท"
// console.log(total_price)

function purchase() {
    let money = parseInt(prompt("Fill the money amount to pay"))
    if (money == total_price) {
        alert("Done. Thank you for paying!")
        location.reload()
    }
    else if (money > total_price) {
        let exchange = money - total_price
        alert("เงินทอน " + exchange + " บาท" + "\nThank you for paying!")
        location.reload()
    }
    else {
        alert("จำนวนเงินไม่พอ กรุณาทำรายการใหม่อีกครั้ง")
    }
}
