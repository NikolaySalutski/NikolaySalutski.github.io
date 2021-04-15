function startTime() {
                var today=new Date();
                var day = today.getDate();
                var month = today.getMonth();
                var year = today.getFullYear();
                var h=today.getHours();
                var m=today.getMinutes();
                var s=today.getSeconds();
                m = checkTime(m);
                s = checkTime(s);
                document.getElementById('txt').innerHTML = "Дата"+":"+" "+ day + "." + month + "." + year + " <br>"+"Час"+":"+" "+h+":"+m+":"+s;
                var t = setTimeout(function(){startTime()},50);    
            }
                function checkTime(i) {
                if (i<10) {i = "0" + i};  
                return i;
            }