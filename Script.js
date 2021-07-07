
        var sec = 0;
        var millisec = 0;
        var min = 0;
        var hr = 0;

        var timer = false;

        function buttonStart() {

            timer =true;
            stopwatch();

        }

        function buttonStop(){

            timer =false;

        }

        function buttonRestart(){

            timer = false;
            millisec = 00;
            sec = 00;
            min = 00;
            hr =00;

           document.getElementById("sec").innerHTML = "00";
           document.getElementById("millisec").innerHTML = "00";
           document.getElementById("min").innerHTML = "00";
           document.getElementById("hr").innerHTML = "00";
        

        }



        function stopwatch(){

            millisec = millisec + 1;

            if(timer == true){

                if(millisec == 100) {
                    
                    millisec = 00;
                    sec = sec +1;
                    document.getElementById("sec").innerHTML = sec;
                }

                if(sec == 60){

                    sec = 00;
                    min = min +1;
                     document.getElementById("min").innerHTML = min;


                }

                if(min == 60){

                    min = 00;
                    hr = hr +1;
                    document.getElementById("hr").innerHTML = hr;

                }
                
               
                var millisecString = millisec;
                var secString = sec;
                var minString = min ;
                var hrString = hr;

                if (millisec<10) {

                    millisecString = "0"+millisec;

                }

                if(sec<10){

                    secString = "0"+ secString;
                }

                if(min<10){

                    minString = "0"+ minString;

                }

                if(hr<10){

                    hrString = "0" + hrString;
                }


                document.getElementById("millisec").innerHTML = millisecString;
                document.getElementById("sec").innerHTML = secString;
                document.getElementById("min").innerHTML = minString;
                document.getElementById("hr").innerHTML = hrString;

                setTimeout( "stopwatch()",10);  

            }
        }