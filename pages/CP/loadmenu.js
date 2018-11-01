$(function () {
    var data = {
        menu: [
            {
                name: 'Dashboard',
                link: 'Siriraj_dashboard.html',
                sub: null
            }
            ,{
                name: 'Static Report',
                link: '',
                sub: [{
                            name: '1. รายงานผล (TAT)',
                            link: 'Siriraj_TAT.html',
                            sub: null
                        }, {
                            name: '2. ระยะเวลา SINGLE QUEUE -> OPD REGISTER',
                            link: 'Siriraj_report1.html',
                            sub: null
                        }, {
                            name: '3. ระยะเวลา OPD REGISTER -> รับใบคืน',
                            link: 'Siriraj_report2.html',
                            sub: null
                        }, {
                            name: '4. ระยะเวลา รับใบคืน -> จ่ายเงิน',
                            link: 'Siriraj_report3.html',
                            sub: null
                        }, {
                            name: '5. ระยะเวลา จ่ายเงิน -> เจาะเลือด',
                            link: 'Siriraj_report4.html',
                            sub: null
                        }, {
                            name: '6. ระยะเวลา เจาะเลือด -> CHECK IN โต๊ะ 20',
                            link: 'Siriraj_report5.html',
                            sub: null
                        }, {
                            name: '7. ระยะเวลา CHECK IN โต๊ะ 20 -> CHECK OUT',
                            link: 'Siriraj_report6.html',
                            sub: null
                        }, {
                            name: '8. ระยะเวลา CHECK OUT -> CENTRAL LAB',
                            link: 'Siriraj_report7.html',
                            sub: null
                        }, {
                            name: '9. ระยะเวลา CENTRAL LAB -> MIDDLEWARES',
                            link: 'Siriraj_report8.html',
                            sub: null
                        }]
            }
      

            // ,{
            //     name: 'England',
            //     link: '1',
            //     sub: [{
            //         name: 'Arsenal',
            //         link: '0-0',
            //         sub: null
            //     }, {
            //         name: 'Liverpool',
            //         link: '0-1',
            //         sub: null
            //     }, {
            //         name: 'Manchester United',
            //         link: '0-2',
            //         sub: null
            //     }]
            // }
        ]
    };

    var str = "";
    $.each( data.menu , function (key , value) {
        if(value.sub==null){
            str += 
            `<li class="d-flex flex-column">
                <a href="`+value.link+`">
                <i class="nav-icon"></i>
                <p>`+value.name+`</p>
                </a>
            </li>`;
        }else{
            str += 
            `<li class="d-flex flex-column">
                    <a href="#tables`+key+`" aria-expanded="false" class="nav-link collapsed" data-toggle="collapse">
                        <p>`+value.name+`
                            <i class="fa fa-sort-desc submenu-toggle"></i>
                        </p>
                    </a>

                    <div class="collapse" id="tables`+key+`" role="navigation" aria-expanded="false">
                        <ul class="nav flex-column ps-container ps-theme-default">`
                        $.each(value.sub, function (keyin , valuein) {
                            str +=
                            `<li>
                                <a class="nav-link" href="`+valuein.link+`">`+valuein.name+`</a>
                            </li>`;
                        });
            str +=      `</ul>
                    </div>
                </li></a>
            </li>`;
        }
    });
    $("#menu").append(str);
    str=null;
});