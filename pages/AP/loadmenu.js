$(function () {
    var data = {
        menu: [
            {
                name: 'Request Search',
                link: '0_first.html',
                sub: null
            },
            {
                name: 'Patient Register',
                link: '0_Register_navbar.html',
                sub: null
            },
            {
                name: 'Order entry',
                link: '1_Order_Entry.html',
                sub: null
            },
            {
                name: 'Billing',
                link: '3_Billing.html',
                sub: null
            },
            {
                name: 'Specimen reception',
                link: '2_Specimen_recaption.html',
                sub: null
            },
            {
                name: 'Gross Exanination',
                link: 'gross.html',
                sub: null
            },
            {
                name: 'Cassette preparation',
                link: '2_Cassette_navbar.html',
                sub: null
            },
            {
                name: 'Slide Preparation',
                link: '5_slide.html',
                sub: null
            },
            {
                name: 'Coding Result',
                link: '2_Result_entry.html',
                sub: null
            },
            {
                name: 'Patient Search',
                link: '7_Patient_Search.html',
                sub: null
            },
            {
                name: 'Import file',
                link: '8_Import.html',
                sub: null
            },
            {
                name: 'CALENDAR MANAGEMENT',
                link: '#',
                sub: [
                    {
                        name: 'Pathologist',
                        link: '10_1_Calendar.html',
                        sub: null
                    },{
                        name: 'Screener',
                        link: '10_1_Calendar.html',
                        sub: null
                    },{
                        name: 'Pathology Assistance',
                        link: '10_1_Calendar.html',
                        sub: null
                    },
                ]
            },{
                name: 'Material Management',
                link: '#',
                sub: [
                    {
                        name: 'Gross Specimen',
                        link: '10_Matirial_Management_Gross_Specimen.html',
                        sub: null
                    },{
                        name: 'Cassette',
                        link: '10_Matirial_Management_Cassette.html',
                        sub: null
                    },{
                        name: 'Slide',
                        link: '10_Matirial_Management_Slide.html',
                        sub: null
                    }
                ]
            }
        ]
    };

    var str = "";
    $.each(data.menu, function (key, value) {

        // <li class="d-flex flex-column active">
        //     <a class="nav-link" href="../widgets/widgets.html">
        //         <i class="nav-icon fas fa-cog"></i>
        //         <p>Widgets</p>
        //     </a>
        // </li>

        if (value.sub == null) {
            str +=
                `<li class="d-flex flex-column">
                
                <a class="nav-link" href="` + value.link + `"> 
                    <p><i class="fa fa-tasks" aria-hidden="true"></i> ` + value.name + `</p>
                </a>
            </li>`;
        } else {
            str +=
                `<li class="d-flex flex-column">
                    <a class="nav-link" href="#tables` + key + `" aria-expanded="true" class="nav-link" data-toggle="collapse">
                        <p><i class="fa fa-tasks" aria-hidden="true"></i> ` + value.name + ` 
                        </p>
                    </a>
                    <div class="collapse show" id="tables` + key + `" role="navigation" aria-expanded="true">
                        <ul class="nav flex-column ps-container ps-theme-default">`
            $.each(value.sub, function (keyin, valuein) {
                str +=
                            `<li class="d-flex flex-column">
                                <a class="nav-link" href="` + valuein.link + `">` + valuein.name + `</a>
                            </li>`;
            });
            str += `    </ul>
                    </div>
                </li></a>
            </li>`;
        }
    });
    $("#menu").append(str);
    str = null;
});
