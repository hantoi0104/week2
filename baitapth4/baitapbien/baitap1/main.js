let inputHoa = prompt("nhập điểm môn hóa: ");
let inputLy = prompt("nhập điểm môn lý: ");
let inputToan = prompt("nhập điểm môn toán: ");
let hoa = parseInt(inputHoa);
let ly = parseInt(inputLy);
let toan = parseInt(inputToan);
let tongDiem = (hoa + ly + toan);
let diemTb = tongDiem/3;
document.write("Tổng điểm ba môn là: " + tongDiem );
document.write('<br/>');
document.write("Điểm trung bình ba môn là: " + diemTb );
