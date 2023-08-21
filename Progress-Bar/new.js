var count = 0;
count = parseInt(count);
function counter(){
        count = count + 1;
        count = count % 8;
        
        if (count === 1) {
            document.getElementById('gridId').style.gridTemplateAreas = '"btn4 btn1 btn2" "btn7 btn5 btn3" "btn8 btn9 btn6"';
        }
        else if (count === 0) {
            document.getElementById('gridId').style.gridTemplateAreas='"btn1 btn2 btn3" "btn4 btn5 btn6"  "btn7 btn8 btn9" ';
        }
        else if (count === 2) {
            document.getElementById('gridId').style.gridTemplateAreas=' "btn7 btn4 btn1" "btn8 btn5 btn2" "btn9 btn6 btn3" ';
        }
        else if (count === 3) {
            document.getElementById('gridId').style.gridTemplateAreas='"btn8 btn7 btn4" "btn9 btn5 btn1" "btn6 btn3 btn2" ';
        }
        else if (count === 4) {
            document.getElementById('gridId').style.gridTemplateAreas='"btn9 btn8 btn7" "btn6 btn5 btn4" "btn3 btn2 btn1" ';
        }
        else if (count === 5) {
            document.getElementById('gridId').style.gridTemplateAreas='"btn6 btn9 btn8" "btn3 btn5 btn7" "btn2 btn1 btn4" ';

        }
        else if (count === 6) {
            document.getElementById('gridId').style.gridTemplateAreas='"btn3 btn6 btn9" "btn2 btn5 btn8" "btn1 btn4 btn7" ';

        }
        else if (count === 7) {
            document.getElementById('gridId').style.gridTemplateAreas='"btn2 btn3 btn6" "btn1 btn5 btn9" "btn4 btn7 btn8" ';

        }
}
