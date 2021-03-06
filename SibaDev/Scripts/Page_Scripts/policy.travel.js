﻿(function ($, s, u, $scope) {
    $(function () {

        // Travel Persons Grid
        $scope.travel_grid = u.default_grid("#gridTravelRisks", "#gridTravelRisksPager", "Travel Details",
            [
                    'Tra No', 'Full Name', 'Date of Birth', 'Age',
                    'Gender', 'Occupation', 'Nationality', 'National ID ',
                    'Passport Number', 'Issuing Country', 'Expiry Date', 'Country of Visit', 'Destination Address',
                    'Destination Phone', 'Beneficiary Name', 'Relationship', 'Contact', 'Declaration', 'Declaration Details',
                     //
                    'Sum Insured FC', 'Sum Insured BC', 'Total Premium FC', 'Total Premium BC',
                    //
                     'Risk Premium FC', 'Risk Premium BC', 'Adj Premium FC', 'Adj Premium BC', 'Discount FC', 'Discount BC', 'Load FC', 'Laod BC',
                    'Compulsory Fee FC', 'Compulsory Fee BC', 'Commossion FC', 'Commission BC', 'Txn Status', 'Risk State',
                    //
                     'Product code', 'Cover Code', ' Renewal Status', 'Endorsement Type', 'Approval Date', 'Account Date',
                    'Create by', 'Create Date', 'Modified By', 'Modified Date', 'Status', 'Policy Cancelled', 'Cancelled Reason',
                    'Sys ID', 'Travel Head ID', 'Polh Sys ID', 'Polh Doc No', ' Polh End No',
            ],
            [
                    { name: 'TRA_RISK_NO', index: 'TRA_RISK_NO', width: 150, sorttype: "int" },

                    { name: 'TRA_FULL_NAME', index: 'TRA_FULL_NAME', width: 150 },
                    { name: 'TRA_DOB', index: 'TRA_DOB', width: 150 },
                    { name: 'TRA_AGE', index: 'TRA_AGE', width: 150 },
                    //TRA_NATIONALITY
                    { name: 'TRA_GENDER', index: 'TRA_GENDER', width: 150 },
                    { name: 'TRA_OCCUPATION', index: 'TRA_OCCUPATION', width: 150 },
                    { name: 'TRA_NATIONALITY', index: 'TRA_NATIONALITY', width: 150 },
                    { name: 'TRA_NATIONAL_ID', index: 'TRA_NATIONAL_ID', width: 150 },
                    { name: 'TRA_PASSPORT_NO', index: 'TRA_PASSPORT_NO', width: 150 },
                    { name: 'TRA_ISSUING_CTY', index: 'TRA_ISSUING_CTY', width: 150 },
                    { name: 'TRA_EXPIRY_DATE', index: 'TRA_EXPIRY_DATE', width: 150 },
                    { name: 'TRA_COUNTRY_VISIT', index: 'TRA_COUNTRY_VISIT', width: 150 },
                    { name: 'TRA_DESTIN_ADDRESS', index: 'TRA_DESTIN_ADDRESS', width: 150 },
                    { name: 'TRA_DESTIN_PHONE', index: 'TRA_DESTIN_PHONE', width: 150 },
                    { name: 'TRA_BENFI_NAME', index: 'TRA_BENFI_NAME', width: 150 },
                    { name: 'TRA_RELATIONSHIP', index: 'TRA_RELATIONSHIP', width: 150 },
                    { name: 'TRA_CONTACT', index: 'TRA_CONTACT', width: 150 },
                    { name: 'TRA_DECLARATION', index: 'TRA_DECLARATION', width: 150 },
                    { name: 'TRA_DECLARATION_DTS', index: 'TRA_DECLARATION_DTS', width: 150 },

                    { name: 'TRA_SI_FC', index: 'TRA_SI_FC', width: 150 },
                    { name: 'TRA_SI_BC', index: 'TRA_SI_BC', width: 150 },
                    { name: 'TRA_TOT_PREM_FC', index: 'TRA_TOT_PREM_FC', width: 150 },
                    { name: 'TRA_TOT_PREM_BC', index: 'TRA_TOT_PREM_BC', width: 150 },

                    { name: 'TRA_RISK_PREM_FC', index: 'TRA_RISK_PREM_FC', width: 150 },
                    { name: 'TRA_RISK_PREM_BC', index: 'TRA_RISK_PREM_BC', width: 150 },

                    { name: 'TRA_ADJ_PREM_FC', index: 'TRA_ADJ_PREM_FC', width: 150 },
                    { name: 'TRA_ADJ_PREM_BC', index: 'TRA_ADJ_PREM_BC', width: 150 },
                    { name: 'TRA_DISC_FC', index: 'TRA_DISC_FC', width: 150 },
                    { name: 'TRA_DISC_BC', index: 'TRA_DISC_BC', width: 150 },
                    { name: 'TRA_LOAD_FC', index: 'TRA_LOAD_FC', width: 150 },
                    { name: 'TRA_LOAD_BC', index: 'TRA_LOAD_BC', width: 150 },
                    { name: 'TRA_COMP_FEE_FC', index: 'TRA_COMP_FEE_FC', width: 150 },
                    { name: 'TRA_COMP_FEE_BC', index: 'TRA_COMP_FEE_BC', width: 150 },
                    { name: 'TRA_COMMISSION_FC', index: 'TRA_COMMISSION_FC', width: 150 },
                    { name: 'TRA_COMMISSION_BC', index: 'TRA_COMMISSION_BC', width: 150 },

                    { name: 'TRA_TXN_STATUS', index: 'TRA_TXN_STATUS', width: 150 },
                    { name: 'TRA_RISK_STATE', index: 'TRA_RISK_STATE', width: 150 },

                    { name: 'TRA_PDT_CODE', index: 'TRA_PDT_CODE', width: 150 },
                    { name: 'TRA_CVR_CODE', index: 'TRA_CVR_CODE', width: 150 },
                    { name: 'TRA_RENEWAL_STATUS', index: 'TRA_RENEWAL_STATUS', width: 150 },
                    { name: 'TRA_END_TYPE', index: 'TRA_END_TYPE', width: 150 },
                    { name: 'TRA_APPROVE_DATE', index: 'TRA_APPROVE_DATE', width: 150 },
                    { name: 'TRA_ACCT_DATE', index: 'TRA_ACCT_DATE', width: 150 },
                    { name: 'TRA_CRTE_BY', index: 'TRA_CRTE_BY', width: 150 },
                    { name: 'TRA_CRTE_DATE', index: '', width: 150 },
                    { name: 'TRA_MOD_BY', index: 'TRA_MOD_BY', width: 150 },
                    { name: 'TRA_MOD_DATE', index: 'TRA_MOD_DATE', width: 150 },
                    { name: 'TRA_STATUS', index: 'TRA_STATUS', width: 150 },

                    { name: 'TRA_POL_CANCELLED', index: 'TRA_POL_CANCELLED', width: 150 },
                    { name: 'TRA_CANCELLED_REASON', index: 'TRA_CANCELLED_REASON', width: 150 },

                    { name: 'TRA_SYS_ID', index: 'TRA_SYS_ID', width: 150 },
                    { name: 'TRA_TRAH_SYS_ID', index: 'TRA_TRAH_SYS_ID', width: 150 },
                    { name: 'TRA_POLH_SYS_ID', index: 'TRA_POLH_SYS_ID', width: 200 },
                    { name: 'TRA_POLH_DOC_NO', index: 'TRA_POLH_DOC_NO', width: 200 },
                    { name: 'TRA_POLH_END_NO', index: 'TRA_POLH_END_NO', width: 200 },
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.travel_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='TRA_RISK_NO']").data("update", true);
                u.fill_form({
                    TRA_RISK_NO: grid.jqGrid('getCell', sel_id, 'TRA_RISK_NO'),
                    TRA_SYS_ID: grid.jqGrid('getCell', sel_id, 'TRA_SYS_ID'),
                    TRA_POLH_SYS_ID: grid.jqGrid('getCell', sel_id, 'TRA_POLH_SYS_ID'),
                    TRA_POLH_DOC_NO: grid.jqGrid('getCell', sel_id, 'TRA_POLH_DOC_NO'),
                    TRA_POLH_END_NO: grid.jqGrid('getCell', sel_id, 'TRA_POLH_END_NO'),
                    TRA_PDT_CODE: grid.jqGrid('getCell', sel_id, 'TRA_PDT_CODE'),
                    TRA_CVR_CODE: grid.jqGrid('getCell', sel_id, 'TRA_CVR_CODE'),
                    TRA_RISK_CODE: grid.jqGrid('getCell', sel_id, 'TRA_RISK_CODE'),
                    TRA_RISK_NAME: grid.jqGrid('getCell', sel_id, 'TRA_RISK_NAME'),
                    TRA_CURRENCY: grid.jqGrid('getCell', sel_id, 'TRA_CURRENCY'),
                    TRA_CURRENCY_RATE: grid.jqGrid('getCell', sel_id, 'TRA_CURRENCY_RATE'),
                    TRA_COVERAGE: grid.jqGrid('getCell', sel_id, 'TRA_COVERAGE'),
                    TRA_PLAN: grid.jqGrid('getCell', sel_id, 'TRA_PLAN'),
                    TRA_VISA_TYPE: grid.jqGrid('getCell', sel_id, 'TRA_VISA_TYPE'),
                    TRA_START_DATE: grid.jqGrid('getCell', sel_id, 'TRA_START_DATE'),
                    TRA_END_DATE: grid.jqGrid('getCell', sel_id, 'TRA_END_DATE'),
                    TRA_DAYS: grid.jqGrid('getCell', sel_id, 'TRA_DAYS'),
                    TRA_WEEKS: grid.jqGrid('getCell', sel_id, 'TRA_WEEKS'),
                    TRA_FULL_NAME: grid.jqGrid('getCell', sel_id, 'TRA_FULL_NAME'),

                    TRA_DOB: grid.jqGrid('getCell', sel_id, 'TRA_DOB'),
                    TRA_AGE: grid.jqGrid('getCell', sel_id, 'TRA_AGE'),
                    TRA_GENDER: grid.jqGrid('getCell', sel_id, 'TRA_GENDER'),
                    TRA_OCCUPATION: grid.jqGrid('getCell', sel_id, 'TRA_OCCUPATION'),
                    TRA_NATIONALITY: grid.jqGrid('getCell', sel_id, 'TRA_NATIONALITY'),
                    TRA_NATIONAL_ID: grid.jqGrid('getCell', sel_id, 'TRA_NATIONAL_ID'),
                    TRA_PASSPORT_NO: grid.jqGrid('getCell', sel_id, 'TRA_PASSPORT_NO'),

                    TRA_ISSUING_CTY: grid.jqGrid('getCell', sel_id, 'TRA_ISSUING_CTY'),
                    TRA_EXPIRY_DATE: grid.jqGrid('getCell', sel_id, 'TRA_EXPIRY_DATE'),
                    TRA_COUNTRY_VISIT: grid.jqGrid('getCell', sel_id, 'TRA_COUNTRY_VISIT'),
                    TRA_DESTIN_ADDRESS: grid.jqGrid('getCell', sel_id, 'TRA_DESTIN_ADDRESS'),
                    TRA_DESTIN_PHONE: grid.jqGrid('getCell', sel_id, 'TRA_DESTIN_PHONE'),

                    TRA_BENFI_NAME: grid.jqGrid('getCell', sel_id, 'TRA_BENFI_NAME'),
                    TRA_RELATIONSHIP: grid.jqGrid('getCell', sel_id, 'TRA_RELATIONSHIP'),
                    TRA_CONTACT: grid.jqGrid('getCell', sel_id, 'TRA_CONTACT'),
                    TRA_DECLARATION: grid.jqGrid('getCell', sel_id, 'TRA_DECLARATION'),
                    TRA_DECLARATION_DTS: grid.jqGrid('getCell', sel_id, 'TRA_DECLARATION_DTS'),
                    TRA_RISK_PREM_FC: grid.jqGrid('getCell', sel_id, 'TRA_RISK_PREM_FC'),
                    TRA_RISK_PREM_BC: grid.jqGrid('getCell', sel_id, 'TRA_RISK_PREM_BC'),
                    TRA_ADJ_PREM_FC: grid.jqGrid('getCell', sel_id, 'TRA_ADJ_PREM_FC'),
                    TRA_ADJ_PREM_BC: grid.jqGrid('getCell', sel_id, 'TRA_ADJ_PREM_BC'),
                    TRA_DISC_FC: grid.jqGrid('getCell', sel_id, 'TRA_DISC_FC'),

                    TRA_DISC_BC: grid.jqGrid('getCell', sel_id, 'TRA_DISC_BC'),
                    TRA_LOAD_FC: grid.jqGrid('getCell', sel_id, 'TRA_LOAD_FC'),
                    TRA_LOAD_BC: grid.jqGrid('getCell', sel_id, 'TRA_LOAD_BC'),
                    TRA_COMP_FEE_FC: grid.jqGrid('getCell', sel_id, 'TRA_COMP_FEE_FC'),
                    TRA_COMP_FEE_BC: grid.jqGrid('getCell', sel_id, 'TRA_COMP_FEE_BC'),

                    TRA_COMMISSION_FC: grid.jqGrid('getCell', sel_id, 'TRA_COMMISSION_FC'),
                    TRA_COMMISSION_BC: grid.jqGrid('getCell', sel_id, 'TRA_COMMISSION_BC'),
                    TRA_TXN_STATUS: grid.jqGrid('getCell', sel_id, 'TRA_TXN_STATUS'),
                    TRA_RISK_STATE: grid.jqGrid('getCell', sel_id, 'TRA_RISK_STATE'),

                    TRA_PDT_CODE: grid.jqGrid('getCell', sel_id, 'TRA_PDT_CODE'),
                    TRA_CVR_CODE: grid.jqGrid('getCell', sel_id, 'TRA_CVR_CODE'),
                    TRA_RENEWAL_STATUS: grid.jqGrid('getCell', sel_id, 'TRA_RENEWAL_STATUS'),
                    TRA_END_TYPE: grid.jqGrid('getCell', sel_id, 'TRA_END_TYPE'),
                    TRA_APPROVE_DATE: grid.jqGrid('getCell', sel_id, 'TRA_APPROVE_DATE'),

                    TRA_ACCT_DATE: grid.jqGrid('getCell', sel_id, 'TRA_ACCT_DATE'),
                    TRA_CRTE_BY: grid.jqGrid('getCell', sel_id, 'TRA_CRTE_BY'),
                    TRA_CRTE_DATE: grid.jqGrid('getCell', sel_id, 'TRA_CRTE_DATE'),
                    TRA_MOD_BY: grid.jqGrid('getCell', sel_id, 'TRA_MOD_BY'),
                    TRA_MOD_DATE: grid.jqGrid('getCell', sel_id, 'TRA_MOD_DATE'),
                    TRA_STATUS: grid.jqGrid('getCell', sel_id, 'TRA_STATUS'),

                    TRA_SI_FC: grid.jqGrid('getCell', sel_id, 'TRA_SI_FC'),
                    TRA_SI_BC: grid.jqGrid('getCell', sel_id, 'TRA_SI_BC'),
                    TRA_TOT_PREM_FC: grid.jqGrid('getCell', sel_id, 'TRA_TOT_PREM_FC'),
                    TRA_TOT_PREM_BC: grid.jqGrid('getCell', sel_id, 'TRA_TOT_PREM_BC'),
                    TRA_POL_CANCELLED: grid.jqGrid('getCell', sel_id, 'TRA_POL_CANCELLED'),
                    TRA_CANCELLED_REASON: grid.jqGrid('getCell', sel_id, 'TRA_CANCELLED_REASON'),
                }, "#travelForm");

                u.fill_form({
                    RCOV_RISK_NO: grid.jqGrid('getCell', sel_id, 'TRA_SYS_ID'),
                }, "#coverForm");
            }),



        // Cover Grid
        $scope.cover_grid = u.default_grid("#gridAppCovers", "#gridAppCoversPager", "Cover",
            ['Cover Code', 'Cover Name',
                'Cover Type', 'Sum Insured FC', 'Sum Insured BC', 'Rate',
                    'Gross Premium FC', 'Gross Premium BC', 'Net Premium FC', 'Net Premium BC',
                    'Discount Applicable', 'Discount FC', 'Discount BC', 'Load Apllicable', 'Load FC', 'Load BC',
                    'Cover id', 'Risk id', 'Cover No.',
                    'Risk no', 'Pol doc no', 'End. no', 'RI SI YN', 'RI Premium YN',
                    'Rate Change', 'SI Change', 'Cover Level', 'Premium Refund', 'User Premium',
                    'RI App',
                    'Txn State', 'Create By', 'Create Date', 'Modified By', 'Modified Date',
                    'Record Status'],
            [
                { name: 'RCOV_CODE', index: 'RCOV_CODE', width: 150 },
                { name: 'RCOV_NAME', index: 'RCOV_NAME', width: 150 },
                { name: 'COVER_TYPE', index: 'COVER_TYPE', width: 150 },
                { name: 'RCOV_SI_FC', index: 'RCOV_SI_FC', width: 150 },
                { name: 'RCOV_SI_BC', index: 'RCOV_SI_BC', width: 150 },
                { name: 'RCOV_RATE', index: 'RCOV_RATE', width: 150 },
                { name: 'RCOV_GROSS_PREM_FC', index: 'RCOV_GROSS_PREM_FC', width: 150 },
                { name: 'RCOV_GROSS_PREM_BC', index: 'RCOV_GROSS_PREM_BC', width: 150 },
                { name: 'RCOV_NET_PREM_FC', index: 'RCOV_NET_PREM_FC', width: 150 },
                { name: 'RCOV_NET_PREM_BC', index: 'RCOV_NET_PREM_BC', width: 150 },

                { name: 'RCOV_DISC_YN', index: 'RCOV_DISC_YN', width: 150 },

                { name: 'RCOV_DISC_FC', index: 'RCOV_DISC_FC', width: 150 },
                { name: 'RCOV_DISC_BC', index: 'RCOV_DISC_BC', width: 150 },

                { name: 'RCOV_LOAD_YN', index: 'RCOV_LOAD_YN', width: 150 },

                { name: 'RCOV_LOAD_FC', index: 'RCOV_LOAD_FC', width: 150 },
                { name: 'RCOV_LOAD_BC', index: 'RCOV_LOAD_BC', width: 150 },

                { name: 'RCOV_SYS_ID', index: 'RCOV_SYS_ID', hidden: false, width: 150, sorttype: "int" },
                { name: 'RCOV_RISK_SYS_ID', index: 'RCOV_RISK_SYS_ID', hidden: false, width: 150 },
                { name: 'RCOV_NO', index: 'RCOV_NO', hidden: false, width: 150 },
                { name: 'RCOV_RISK_NO', index: 'RCOV_RISK_NO', hidden: false, width: 150 },
                { name: 'RCOV_POLH_DOC_NO', index: 'RCOV_POLH_DOC_NO', width: 150 },
                { name: 'RPCOV_END_NO', index: 'RPCOV_END_NO', width: 150 },
                { name: 'RCOV_RI_SI_YN', index: 'RCOV_RI_SI_YN', hidden: false, width: 150 },
                { name: 'RCOV_RI_PREM_YN', index: 'RCOV_RI_PREM_YN', hidden: false, width: 150 },

                { name: 'COVER_RATE_CHANGE', index: 'COVER_RATE_CHANGE', width: 150 },
                { name: 'COVER_SI_CHANGE', index: 'COVER_SI_CHANGE', width: 150 },
                { name: 'COVER_LEVEL', index: 'COVER_LEVEL', width: 150 },
                { name: 'COVER_PREM_REFUND', index: 'COVER_PREM_REFUND', width: 150 },
                { name: 'COVER_USER_PREM', index: 'COVER_USER_PREM', width: 150 },
                { name: 'RCOV_RI_YN', index: 'RCOV_RI_YN', width: 150 },
                //
                { name: 'RCOV_TXN_STATE', index: 'RCOV_TXN_STATE', width: 150 },
                { name: 'RCOV_CRTE_BY', index: 'RCOV_CRTE_BY', width: 150 },
                { name: 'RCOV_CRTE_DATE', index: 'RCOV_CRTE_DATE', width: 150 },
                { name: 'RCOV_MOD_BY', index: 'RCOV_MOD_BY', width: 150 },
                { name: 'RCOV_MOD_DATE', index: 'RCOV_MOD_DATE', width: 150 },
                { name: 'RCOV_STATUS', index: 'RCOV_STATUS', width: 100 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.cover_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='RCOV_SYS_ID']").data("update", true);
                u.fill_form({
                    RCOV_SYS_ID: grid.jqGrid('getCell', sel_id, 'RCOV_SYS_ID'),
                    RCOV_RISK_SYS_ID: grid.jqGrid('getCell', sel_id, 'RCOV_RISK_SYS_ID'),
                    RCOV_RISK_NO: grid.jqGrid('getCell', sel_id, 'RCOV_RISK_NO'),
                    RCOV_POLH_DOC_NO: grid.jqGrid('getCell', sel_id, 'RCOV_POLH_DOC_NO'),
                    RPCOV_END_NO: grid.jqGrid('getCell', sel_id, 'RPCOV_END_NO'),
                    RCOV_CODE: grid.jqGrid('getCell', sel_id, 'RCOV_CODE'),
                    RCOV_SI_FC: grid.jqGrid('getCell', sel_id, 'RCOV_SI_FC'),

                    RCOV_SI_BC: grid.jqGrid('getCell', sel_id, 'RCOV_SI_BC'),
                    RCOV_RATE: grid.jqGrid('getCell', sel_id, 'RCOV_RATE'),
                    RCOV_GROSS_PREM_FC: grid.jqGrid('getCell', sel_id, 'RCOV_GROSS_PREM_FC'),
                    RCOV_GROSS_PREM_BC: grid.jqGrid('getCell', sel_id, 'RCOV_GROSS_PREM_BC'),
                    RCOV_NET_PREM_FC: grid.jqGrid('getCell', sel_id, 'RCOV_NET_PREM_FC'),
                    RCOV_NET_PREM_BC: grid.jqGrid('getCell', sel_id, 'RCOV_NET_PREM_BC'),
                    RCOV_RI_SI_YN: grid.jqGrid('getCell', sel_id, 'RCOV_RI_SI_YN'),

                    RCOV_RI_PREM_YN: grid.jqGrid('getCell', sel_id, 'RCOV_RI_PREM_YN'),
                    RCOV_TYPE: grid.jqGrid('getCell', sel_id, 'RCOV_TYPE'),
                    RCOV_DISC_YN: grid.jqGrid('getCell', sel_id, 'RCOV_DISC_YN'),
                    RCOV_DISC_FC: grid.jqGrid('getCell', sel_id, 'RCOV_DISC_FC'),
                    RCOV_DISC_BC: grid.jqGrid('getCell', sel_id, 'RCOV_DISC_BC'),
                    RCOV_LOAD_YN: grid.jqGrid('getCell', sel_id, 'RCOV_LOAD_YN'),
                    RCOV_LOAD_FC: grid.jqGrid('getCell', sel_id, 'RCOV_LOAD_FC'),

                    RCOV_LOAD_BC: grid.jqGrid('getCell', sel_id, 'RCOV_LOAD_BC'),
                    RCOV_TXN_STATE: grid.jqGrid('getCell', sel_id, 'RCOV_TXN_STATE'),
                    RCOV_CRTE_BY: grid.jqGrid('getCell', sel_id, 'RCOV_CRTE_BY'),
                    RCOV_CRTE_DATE: grid.jqGrid('getCell', sel_id, 'RCOV_CRTE_DATE'),
                    RCOV_MOD_BY: grid.jqGrid('getCell', sel_id, 'RCOV_MOD_BY'),
                    RCOV_MOD_DATE: grid.jqGrid('getCell', sel_id, 'RCOV_MOD_DATE'),
                    RCOV_STATUS: grid.jqGrid('getCell', sel_id, 'RCOV_STATUS'),

                }, "#coverForm");
            }),



        // Risk Covers ****
        $scope.riskCovers_grid = u.default_grid("#gridAddNewCover", "#gridAddNewCoverPager", "Risk Covers",
            ['Code', 'Name', 'Sum Insured', 'Deft Rate', 'Deft Premium'],
            [
                { name: 'PCV_COV_CODE', index: 'PCV_COV_CODE', width: 150 },
                { name: 'COVER_NAME', index: 'COVER_NAME', width: 150 },
                { name: 'PCV_SI', index: 'PCV_SI', width: 150 },
                { name: 'PCV_DEF_RATE', index: 'PCV_DEF_RATE', width: 150 },
                { name: 'PCV_DEF_PREM', index: 'PCV_DEF_PREM', width: 150 },
            ],


             //Retrive Grid data into form input fields on row click..
            function (sel_id) {

                var grid = $scope.riskCovers_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    RCOV_CODE: grid.jqGrid('getCell', sel_id, 'PCV_COV_CODE'),
                    RCOV_NAME: grid.jqGrid('getCell', sel_id, 'COVER_NAME'),
                    RCOV_RATE: grid.jqGrid('getCell', sel_id, 'PCV_DEF_RATE'),
                    RCOV_SI_FC: grid.jqGrid('getCell', sel_id, 'PCV_SI'),
                    RCOV_GROSS_PREM_FC: grid.jqGrid('getCell', sel_id, 'PCV_DEF_PREM'),
                    RCOV_NET_PREM_FC: grid.jqGrid('getCell', sel_id, 'PCV_DEF_PREM'),

                }, "#coverForm");
            },
            //Retrive Grid data into form input fields on row double click.... XXX
            function (sel_id) {

                var grid = $scope.riskCovers_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    RCOV_CODE: grid.jqGrid('getCell', sel_id, 'PCV_COV_CODE'),
                    RCOV_NAME: grid.jqGrid('getCell', sel_id, 'COVER_NAME'),
                    RCOV_RATE: grid.jqGrid('getCell', sel_id, 'PCV_DEF_RATE'),
                    RCOV_SI_FC: grid.jqGrid('getCell', sel_id, 'PCV_SI'),
                    RCOV_GROSS_PREM_FC: grid.jqGrid('getCell', sel_id, 'PCV_DEF_PREM'),
                    RCOV_NET_PREM_FC: grid.jqGrid('getCell', sel_id, 'PCV_DEF_PREM'),

                }, "#coverForm");

                // hide modal on double click
                $("#AddNewCoverModal").modal('hide');

            }),



        // Premium Summary
        $scope.premium_grid = u.default_grid("#gridPremSum", "#gridPremSumPager", "Policy Premium Summary",
            ['Description', 'FC_Amount', 'BC_Amount'],
            [
                { name: 'DESCRIPTION', index: 'DESCRIPTION', width: 150 },
                { name: 'FC_AMOUNT', index: 'FC_AMOUNT', width: 150 },
                { name: 'BC_AMOUNT', index: 'BC_AMOUNT', width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Premium Register Summary
        $scope.premiumreg_grid = u.default_grid("#gridPremReg", "#gridPremRegPager", "Policy Premium Register Summary",
            [
            'Pol sys ID', 'Pol Doc. No.', 'END No.', ' COB', 'Customer ID', 'Office',
            'Insurane Source', 'Business Source', 'Treatty source', 'UW Accounts Type', 'Currency', 'Rate', 'FC Amount', 'BC Amount',
            'Reference No.', 'Acct Posting',
            'Post Date', 'Created by', 'Post Date', 'Modified by', 'Modified Date', 'Status', 'Customer Acct'
            ],
            [
                { name: 'PR_POL_SYS_ID', index: 'PR_POL_SYS_ID', width: 200 },
                { name: 'PR_POL_DOC_NO', index: 'PR_POL_DOC_NO', width: 200 },
                { name: 'PR_END_NO', index: 'PR_END_NO', width: 200 },
                { name: 'PR_COB', index: 'PR_COB', width: 200 },
                { name: 'PR_CUST_CODE', index: 'PR_CUST_CODE', width: 200 },
                { name: 'PR_OFFICE', index: 'PR_OFFICE', width: 200 },
                { name: 'PR_INS_SOURCE', index: 'PR_INS_SOURCE', width: 200 },
                { name: 'PR_BUS_SOURCE', index: 'PR_BUS_SOURCE', width: 200 },
                { name: 'PR_TTY_SOURCE', index: 'PR_TTY_SOURCE', width: 200 },
                { name: 'PR_UWD_ACCT_TYPE', index: 'PR_UWD_ACCT_TYPE', width: 200 },
                { name: 'PR_CURRENCY', index: 'PR_CURRENCY', width: 200 },
                { name: 'PR_FX_RATE', index: 'PR_FX_RATE', width: 200 },
                { name: 'PR_FC_AMOUNT', index: 'PR_FC_AMOUNT', width: 200 },
                { name: 'PR_BC_AMOUNT', index: 'PR_BC_AMOUNT', width: 200 },
                { name: 'PR_TXN_REF', index: 'PR_TXN_REF', width: 200 },
                { name: 'PR_ACCT_YN', index: 'PR_ACCT_YN', width: 200 },
                { name: 'PR_POST_DATE', index: 'PR_POST_DATE', width: 200 },
                { name: 'PR_CRTE_BY', index: 'PR_CRTE_BY', width: 200 },
                { name: 'PR_CRTE_DATE', index: 'PR_CRTE_DATE', width: 200 },
                { name: 'PR_MOD_BY', index: 'PR_MOD_BY', width: 200 },
                { name: 'PR_MOD_DATE', index: 'PR_MOD_DATE', width: 200 },
                { name: 'PR_STATUS', index: 'PR_STATUS', width: 200 },
                { name: 'PR_CUST_ACCT', index: 'PR_CUST_ACCT', width: 200 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Premium Fees Summary
        $scope.fees_grid = u.default_grid("#gridPremRegFees", "#gridPremRegFeesPager", "Policy Premium Fees Summary",
            [
            'Pol sys ID', 'Pol Doc. No.', 'END No.', ' COB', 'Customer ID', 'Office',
            'Insurane Source', 'Business Source', 'Treatty source', 'UW Accounts Type', 'Currency', 'Rate', 'FC Amount', 'BC Amount',
            'Reference No.', 'Acct Posting',
            'Post Date', 'Created by', 'Post Date', 'Modified by', 'Modified Date', 'Status', 'Customer Acct'
            ],
            [
                { name: 'PR_POL_SYS_ID', index: 'PR_POL_SYS_ID', width: 200 },
                { name: 'PR_POL_DOC_NO', index: 'PR_POL_DOC_NO', width: 200 },
                { name: 'PR_END_NO', index: 'PR_END_NO', width: 200 },
                { name: 'PR_COB', index: 'PR_COB', width: 200 },
                { name: 'PR_CUST_CODE', index: 'PR_CUST_CODE', width: 200 },
                { name: 'PR_OFFICE', index: 'PR_OFFICE', width: 200 },
                { name: 'PR_INS_SOURCE', index: 'PR_INS_SOURCE', width: 200 },
                { name: 'PR_BUS_SOURCE', index: 'PR_BUS_SOURCE', width: 200 },
                { name: 'PR_TTY_SOURCE', index: 'PR_TTY_SOURCE', width: 200 },
                { name: 'PR_UWD_ACCT_TYPE', index: 'PR_UWD_ACCT_TYPE', width: 200 },
                { name: 'PR_CURRENCY', index: 'PR_CURRENCY', width: 200 },
                { name: 'PR_FX_RATE', index: 'PR_FX_RATE', width: 200 },
                { name: 'PR_FC_AMOUNT', index: 'PR_FC_AMOUNT', width: 200 },
                { name: 'PR_BC_AMOUNT', index: 'PR_BC_AMOUNT', width: 200 },
                { name: 'PR_TXN_REF', index: 'PR_TXN_REF', width: 200 },
                { name: 'PR_ACCT_YN', index: 'PR_ACCT_YN', width: 200 },
                { name: 'PR_POST_DATE', index: 'PR_POST_DATE', width: 200 },
                { name: 'PR_CRTE_BY', index: 'PR_CRTE_BY', width: 200 },
                { name: 'PR_CRTE_DATE', index: 'PR_CRTE_DATE', width: 200 },
                { name: 'PR_MOD_BY', index: 'PR_MOD_BY', width: 200 },
                { name: 'PR_MOD_DATE', index: 'PR_MOD_DATE', width: 200 },
                { name: 'PR_STATUS', index: 'PR_STATUS', width: 200 },
                { name: 'PR_CUST_ACCT', index: 'PR_CUST_ACCT', width: 200 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Applicable Risk Fees Summary
        $scope.riskFees_grid = u.default_grid("#gridCompFees", "#gridCompFeesPager", "Applicable Fees Summary",
            [' Code', 'Fee Name', 'FC Amount', 'BC Amount',
                    'Polh SYS ID', 'Risk SYS ID', 'Risk N0', 'Risk Code', 'Polh End No.', 'Status', 'Fee SYS ID'],
            [
                { name: 'TRA_FEE_CODE', index: 'TRA_FEE_CODE', width: 150 },
                { name: 'TRA_FEE_NAME', index: 'TRA_FEE_NAME', width: 200 },
                { name: 'TRA_FEE_FC_AMOUNT', index: 'TRA_FEE_FC_AMOUNT', width: 150 },
                { name: 'TRA_FEE_BC_AMOUNT', index: 'TRA_FEE_BC_AMOUNT', width: 150 },

                { name: 'TRA_FEE_POL_SYS_ID', index: 'TRA_FEE_POL_SYS_ID', width: 150 },
                { name: 'TRA_FEE_RK_SYS_ID', index: 'TRA_FEE_RK_SYS_ID', width: 150 },
                { name: 'TRA_FEE_RK_NO', index: 'TRA_FEE_RK_NO', width: 150 },
                { name: 'TRA_FEE_RK_CODE', index: 'TRA_FEE_RK_CODE', width: 150 },
                { name: 'TRA_FEE_END_NO', index: 'TRA_FEE_END_NO', width: 150 },
                { name: 'TRA_FEE_STATUS', index: 'TRA_FEE_STATUS', width: 150 },
                { name: 'TRA_FEE_SYS_ID', index: 'TRA_FEE_SYS_ID', width: 150 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Applicable Policy Fees Summary
        $scope.polfees_grid = u.default_grid("#gridPolFees", "#gridPolFeesPager", "Policy Fees Summary",
            ["Fee Code", "Fee Name", "FC Amount", "BC Amount", "Polh SYS ID", "Polh End No.", "Status",
                    "Created By", "Created Date", "Mod By", "Mod Date", "Fee SYS ID"],
            [
                { name: "POL_FEE_CODE", index: "POL_FEE_CODE", width: 150 },
                { name: "POL_FEE_NAME", index: "POL_FEE_NAME", width: 200 },
                { name: "POL_FEE_FC_AMOUNT", index: "POL_FEE_FC_AMOUNT", width: 150 },
                { name: "POL_FEE_BC_AMOUNT", index: "POL_FEE_BC_AMOUNT", width: 150 },
                { name: "POL_FEE_POL_SYS_ID", index: "POL_FEE_POL_SYS_ID", width: 150 },
                { name: "POL_FEE_END_NO", index: "POL_FEE_END_NO", width: 150 },
                { name: "POL_FEE_STATUS", index: "POL_FEE_STATUS", width: 150 },
                { name: "POL_FEE_CRTE_BY", index: "POL_FEE_CRTE_BY", width: 150 },
                { name: "POL_FEE_CRTE_DATE", index: "POL_FEE_CRTE_DATE", width: 150 },
                { name: "POL_FEE_MOD_BY", index: "POL_FEE_MOD_BY", width: 150 },
                { name: "POL_FEE_MOD_DATE", index: "POL_FEE_MOD_DATE", width: 150 },
                { name: "POL_FEE_SYS_ID", index: "POL_FEE_SYS_ID", width: 150 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {

            }),


        // Premium Payment Summary
        $scope.payment_grid = u.default_grid("#gridPremPmt", "#gridPremPmtPager", "Policy Premium Summary",
            ['Description', 'FC_Amount', 'BC_Amount'],
            [
                { name: 'DESCRIPTION', index: 'DESCRIPTION', width: 150 },
                { name: 'FC_AMOUNT', index: 'FC_AMOUNT', width: 150 },
                { name: 'BC_AMOUNT', index: 'BC_AMOUNT', width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Reinsurance Share Summary
        $scope.coinsurance_grid = u.default_grid("#gridCoIns", "#gridCoInsPager", "Reinsurance Share Summary",
            ['Description', 'FC_Amount', 'BC_Amount'],
            [
                { name: 'DESCRIPTION', index: 'DESCRIPTION', width: 150 },
                { name: 'FC_AMOUNT', index: 'FC_AMOUNT', width: 150 },
                { name: 'BC_AMOUNT', index: 'BC_AMOUNT', width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // FAC In Premium Summary
        $scope.facinpremium_grid = u.default_grid("#gridFACINPremSum", "#gridFACINPremSumPager", "Treaty Apportionment Summary",
            ['Description', 'FC_Amount', 'BC_Amount'],
            [
                { name: 'DESCRIPTION', index: 'DESCRIPTION', width: 150 },
                { name: 'FC_AMOUNT', index: 'FC_AMOUNT', width: 150 },
                { name: 'BC_AMOUNT', index: 'BC_AMOUNT', width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Reinsurance Summary
        $scope.reinsurance_grid = u.default_grid("#gridRISummary", "#gridRISummaryPager", "Reinsurance Summary",
            ['Description', 'FC_Amount', 'BC_Amount'],
            [
                { name: 'DESCRIPTION', index: 'DESCRIPTION', width: 150 },
                { name: 'FC_AMOUNT', index: 'FC_AMOUNT', width: 150 },
                { name: 'BC_AMOUNT', index: 'BC_AMOUNT', width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),

        // Claim Summary
        $scope.cliams_grid = u.default_grid("#gridClaimsSummary", "#gridClaimsSummaryPager", "Policy Claim Summary",
            ['Description', 'FC_Amount', 'BC_Amount'],
            [
                { name: 'DESCRIPTION', index: 'DESCRIPTION', width: 150 },
                { name: 'FC_AMOUNT', index: 'FC_AMOUNT', width: 150 },
                { name: 'BC_AMOUNT', index: 'BC_AMOUNT', width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {

            }),


        // Agent/Broker Commission
        $scope.intermCom_grid = u.default_grid("#grdIntermediaryComm", "#grdIntermediaryCommPager", "Agent/Broker Commission",
            ["Intermediary Code", "Name", "Premium Amt FC", "Premium Amt BC", "Comm Per(%)", "Comm. Amount FC", "Comm. Amount BC", "Status",
             "Pols_sysID", "Pol_end_No", "COB", "Office", "Comm Date", "Created_By", "Created_Date",
             "Mod_date", "Mod_by", "Com_sys_ID"],
            [
                { name: "CMM_INT_CODE", index: "CMM_INT_CODE", width: 150 },
                 { name: "CMM_INT_NAME", index: "CMM_INT_NAME", width: 150 },
                { name: "CMM_PREM_AMT_FC", index: "CMM_PREM_AMT_FC", width: 150 },
                { name: "CMM_PREM_AMT_BC", index: "CMM_PREM_AMT_BC", width: 150 },

                { name: "CMM_COM_PERC", index: "CMM_COM_PERC", width: 150 },
                { name: "CMM_COM_AMT_FC", index: "CMM_COM_AMT_FC", width: 150 },
                { name: "CMM_COM_AMT_BC", index: "CMM_COM_AMT_BC", width: 150 },

                { name: "CMM_STATUS", index: "CMM_STATUS", hidden: false, width: 200 },

                { name: "CMM_POL_SYS_ID", index: "CMM_POL_SYS_ID", hidden: false, width: 200 },
                { name: "CMM_END_NO", index: "CMM_END_NO", hidden: false, width: 200 },
                { name: "CMM_COB_CODE", index: "CMM_COB_CODE", hidden: false, width: 200 },
                { name: "CMM_OFFICE", index: "CMM_OFFICE", hidden: false, width: 200 },
                { name: "CMM_COM_DATE", index: "CMM_COM_DATE", hidden: false, width: 200 },
                { name: "CMM_CRTE_BY", index: "CMM_CRTE_BY", hidden: false, width: 200 },
                { name: "CMM_CRTE_DATE", index: "CMM_CRTE_DATE", hidden: false, width: 200 },
                { name: "CMM_MOD_BY", index: "CMM_MOD_BY", hidden: false, width: 200 },
                { name: "CMM_MOD_DATE", index: "CMM_MOD_DATE", hidden: false, width: 200 },
                { name: "CMM_SYS_ID", index: "CMM_SYS_ID", hidden: false, width: 200 },


            ],
           //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.intermCom_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='CMM_INT_CODE']").data("update", true);
                u.fill_form({
                    CMM_INT_CODE: grid.jqGrid('getCell', sel_id, 'CMM_INT_CODE'),
                    CMM_PREM_AMT_FC: grid.jqGrid('getCell', sel_id, 'CMM_PREM_AMT_FC'),
                    CMM_PREM_AMT_BC: grid.jqGrid('getCell', sel_id, 'CMM_PREM_AMT_BC'),
                    CMM_COM_PERC: grid.jqGrid('getCell', sel_id, 'CMM_COM_PERC'),
                    CMM_COM_AMT_FC: grid.jqGrid('getCell', sel_id, 'CMM_COM_AMT_FC'),
                    CMM_COM_AMT_BC: grid.jqGrid('getCell', sel_id, 'CMM_COM_AMT_BC'),

                }, "#agencycommForm");
            }),



        // Product Risk Grid ****
        $scope.prodRisks_grid = u.default_grid("#gridProdRisk", "#gridProdRiskPager", "Motor Risk",
            ['Code', 'Name'],
            [
                { name: 'RISK_CODE', index: 'RISK_CODE', width: 150 },
                { name: 'RISK_NAME', index: 'RISK_NAME', width: 150 },

            ],
             //Retrive Grid data into form input fields on row click..
            function (sel_id) {

                var grid = $scope.prodRisks_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    POLH_SUB_CLASS_CODE: grid.jqGrid('getCell', sel_id, 'RISK_CODE'),
                    PDT_NAME: grid.jqGrid('getCell', sel_id, 'RISK_NAME'),

                }, "#polheaderForm");
            },
            //Retrive Grid data into form input fields on row double click.... XXX
            function (sel_id) {

                var grid = $scope.prodRisks_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    POLH_SUB_CLASS_CODE: grid.jqGrid('getCell', sel_id, 'RISK_CODE'),
                    PDT_NAME: grid.jqGrid('getCell', sel_id, 'RISK_NAME'),

                }, "#polheaderForm");

                // hide modal on double click
                $("#prodRiskLovModal").modal('hide');

            }),


        // Customer Dialog
                $scope.customer_grid = u.default_grid("#gridCustomer", "#gridCustomerPager", "Customer",
            ['Code', 'Full Name', 'Date of Birth', 'Address', 'Tel no', 'Mobile', 'Created date', 'Created by'],
            [
                { name: 'CUS_CODE', index: 'CUS_CODE', width: 150 },
                { name: 'CUS_OFFICIAL_NAME', index: 'CUS_OFFICIAL_NAME', width: 150 },
                { name: 'CUS_DOB', index: 'CUS_DOB', width: 150 },
                { name: 'CUS_ADDRS1', index: 'CUS_ADDRS1', width: 150 },
                { name: 'CUS_PHONE1', index: 'CUS_PHONE1', width: 150 },
                { name: 'CUS_MOBILE', index: 'CUS_MOBILE', width: 150 },
                { name: 'CUS_CRTE_DATE', index: 'CUS_CRTE_DATE', width: 150 },
                { name: 'CUS_CRTE_BY', index: 'CUS_CRTE_BY', width: 150 },
            ],
             //Retrive Grid data into form input fields on row click..
            function (sel_id) {

                var grid = $scope.customer_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='CUS_CODE']").data("update", true);
                u.fill_form({
                    POLH_CUST_CODE: grid.jqGrid('getCell', sel_id, 'CUS_CODE'),
                    CUS_OFFICIAL_NAME: grid.jqGrid('getCell', sel_id, 'CUS_OFFICIAL_NAME'),
                    CUS_DOB: grid.jqGrid('getCell', sel_id, 'CUS_DOB'),
                    CUS_ADDRS1: grid.jqGrid('getCell', sel_id, 'CUS_ADDRS1'),
                    CUS_PHONE1: grid.jqGrid('getCell', sel_id, 'CUS_PHONE1'),
                    CUS_MOBILE: grid.jqGrid('getCell', sel_id, 'CUS_MOBILE'),
                    CUS_CRTE_DATE: grid.jqGrid('getCell', sel_id, 'CUS_CRTE_DATE'),
                    CUS_CRTE_BY: grid.jqGrid('getCell', sel_id, 'CUS_CRTE_BY'),
                }, "#polheaderForm");
            },
            //Retrive Grid data into form input fields on row double click.... XXX
            function (sel_id) {

                var grid = $scope.customer_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='CUS_CODE']").data("update", true);
                u.fill_form({
                    POLH_CUST_CODE: grid.jqGrid('getCell', sel_id, 'CUS_CODE'),
                    CUS_OFFICIAL_NAME: grid.jqGrid('getCell', sel_id, 'CUS_OFFICIAL_NAME'),
                    CUS_ADDRS1: grid.jqGrid('getCell', sel_id, 'CUS_ADDRS1'),
                    CUS_PHONE1: grid.jqGrid('getCell', sel_id, 'CUS_PHONE1'),
                    CUS_MOBILE: grid.jqGrid('getCell', sel_id, 'CUS_MOBILE'),
                    CUS_CRTE_DATE: grid.jqGrid('getCell', sel_id, 'CUS_CRTE_DATE'),
                    CUS_CRTE_BY: grid.jqGrid('getCell', sel_id, 'CUS_CRTE_BY'),
                }, "#polheaderForm");

                // hide modal on double click
                $("#customerLovModal").modal('hide');

            }),


        //Intermediary Commission
                $scope.interComm_grid = u.default_grid("#gridinterComm", "#gridinterCommPager", "Intermediary Commission Perc",
            ["Code", "Name", "Commission %"],
            [
                { name: "COM_INT_CODE", index: "COM_INT_CODE", width: 150 },
                { name: "COM_NAME", index: "COM_NAME", width: 250 },
                { name: "COM_DFT_PERC", index: "COM_DFT_PERC", width: 150 },
            ],
           //Retrive Grid data into form input fields on row click..
              //Retrive Grid data into form input fields on row click.. motorRisks_grid
            function (selId) {

                var grid = $scope.interComm_grid;

                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    CMM_INT_CODE: grid.jqGrid("getCell", selId, "COM_INT_CODE"),
                    CMM_INT_NAME: grid.jqGrid("getCell", selId, "COM_NAME"),
                    CMM_COM_PERC: grid.jqGrid("getCell", selId, "COM_DFT_PERC"),

                }, "#agencycommForm");
            },

            function (selId) {
                var grid = $scope.interComm_grid;

                $("form input[name='DL_CODE']").data("update", true);
                u.fill_form({
                    CMM_INT_CODE: grid.jqGrid("getCell", selId, "COM_INT_CODE"),
                    CMM_INT_NAME: grid.jqGrid("getCell", selId, "COM_NAME"),
                    CMM_COM_PERC: grid.jqGrid("getCell", selId, "COM_DFT_PERC")
                }, "#agencycommForm");
                $("#interCommLovModal").modal("hide");
            });


        $scope.saving = false;


        /*------------------------------------------
 * Tabs Layout function call using Jquery 
 *----------------------------------------*/
        //  
        $("#tabs").tabs({
            beforeLoad: function (event, ui) {
                ui.jqXHR.fail(function () {
                    ui.panel.html(
                      "Couldn't load this tab. We'll try to fix this as soon as possible. " +
                      "If this wouldn't be a demo.");
                });
            }
        }); /*----------------------
 * LOV initialization
 *--------------------*/
        $scope.lov = u.lov_init("#myLOVModal", "#grdLOVRegion", "#grdLOVRegionPager");

        /*-----------------------------------------
         * LOV button click event handling
         *---------------------------------------*/
        $("body").delegate(".btn_lov", "click", function (e) {
            $scope.dialog_data = $(this).data("dialog");
            switch ($scope.dialog_data.type) {
                case "btn_company":
                    $scope.lov.call_dialog("Select Company", "get_lov_company", $scope.dialog_data);
                    break;
                case "btn_channel":
                    $scope.lov.call_dialog("Select Channel", "get_lov_channel", $scope.dialog_data);
                    break;
                case "btn_office":
                    $scope.lov.call_dialog("Select Office", "get_lov_office", $scope.dialog_data);
                    break;
                case "btn_product_type":
                    $scope.lov.call_dialog("Select Product Type", "get_lov_product_type", $scope.dialog_data);
                    break;
                case "btn_cover_type":
                    $scope.lov.call_dialog("Select Cover", "get_lov_cover_type", $scope.dialog_data);
                    break;
                case "btn_insurance_source":
                    $scope.lov.call_dialog("Select Insurance Source", "get_lov_ins_source", $scope.dialog_data);
                    break;
                case "btn_broker_agent":
                    $scope.lov.call_dialog("Select Broker/Agent", "get_lov_broker_agent", $scope.dialog_data);
                    break;
                case "btn_business_source":
                    $scope.lov.call_dialog("Select Business Source", "get_lov_business_source", $scope.dialog_data);
                    break;
                case "btn_customer":
                    $scope.lov.call_dialog("Select Customer", "get_lov_customer", $scope.dialog_data);
                    break;
                case "btn_base_currency":
                    $scope.lov.call_dialog("Select Currency", "get_lov_currency", $scope.dialog_data);
                    break;
                case "btn_make_model":
                    $scope.lov.call_dialog("Select Make & Model", "get_lov_makemodel", $scope.dialog_data);
                    break;
                case "btn_risk":
                    $scope.lov.call_dialog("Select Risk", "get_lov_motor_risks", $scope.dialog_data);
                    break;
                case "btn_customer_type":
                    $scope.lov.call_dialog("Select Customer type", "get_lov_customertypes", $scope.dialog_data);
                    break;
            }
        });
        $("#btn_CustomersLov").on('click', function () {

            $("#customerLovModal").modal();

        });

        $("#btnQueryCustomers").click(function () {
            var queryTxt = $("#treatySearch").val();
            if (queryTxt != null && queryTxt.length > 0) {
                s.search_customer(queryTxt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.customer_grid.jqGrid("clearGridData");
                        for (var i in result) {
                            $scope.customer_grid.addRowData(result[i].CUS_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.customer_grid.jqGrid("clearGridData");

                //fetch all regions
                s.get_customers(function (regions) {
                    for (var i in regions) {
                        $scope.customer_grid.addRowData(regions[i].CUS_CODE, regions[i]);
                    }
                });
            }

        }); /*--------------------------------------------------
        * add product base on class of business
        *------------------------------------------------*/
        //
        function getProductRiskLov() {
            /*
                obtain parameter for our request
            */
            var prodRiskData = {
                PRD_CODE: $("#POLH_CLASS_CODE").val(),
            }; //
            var grid = $scope.prodRisks_grid;

            var rowIds = grid.jqGrid('getDataIDs');

            //send parameters and get motor Risks from the database
            s.getProdtRisk(prodRiskData, function (result) {
                if (result && result.length && result.length > 0) {
                    //clear Grid
                    $scope.prodRisks_grid.jqGrid('clearGridData');
                    //fill grid
                    for (var i in result) {
                        $scope.prodRisks_grid.addRowData(result[i]["RISK_CODE"], result[i]);
                    }
                }
            });
        }

        /*--------------------------------------------------
      * Retrieving products on calling getProductRiskLov function
      *------------------------------------------------*/

        $("#btnQueryProductRisk").on('click', function () {
            getProductRiskLov();
        });

        /*--------------------------------------------------
       * Getting product base on Class of Business
       *------------------------------------------------*/

        $("#btn_ProductRisk").on('click', function () {

            if ($("#POLH_CLASS_CODE").val() == "") {

                u.growl_warning("Product Code is empty, Please check and try again");
            }
            else {

                $("#prodRiskLovModal").modal();

            }

        });


        /*--------------------------------------------------
* Get Risk compulsory Fees
*------------------------------------------------*/
        // 
        function getRiskComPulsoryFess() {

            /*
                obtain parameter for our request
            */
            var riskFeesData = {

                CLASS_CODE: $("#POLH_CLASS_CODE").val(),
                PRD_CODE: $("#POLH_SUB_CLASS_CODE").val(),

            }; //
            var grid = $scope.riskFees_grid;

            var rowIds = grid.jqGrid('getDataIDs');

            //send parameters and get motor Risks from the database
            s.getRiskFees(riskFeesData, function (result) {
                if (result && result.length && result.length > 0) {

                    //clear Grid
                    //$scope.riskFees_grid.jqGrid('clearGridData');
                    //fill grid 
                    for (var i in result) {

                        result[i]["TRA_FEE_FC_AMOUNT"] = result[i]["PRF_FEE_AMOUNT"];
                        result[i]["TRA_FEE_BC_AMOUNT"] = result[i]["PRF_FEE_AMOUNT"];
                        result[i]["TRA_FEE_CODE"] = result[i]["PRF_FEE_CODE"];
                        result[i]["TRA_FEE_RK_NO"] = result[i]["PRF_SYS_ID"];
                        result[i]["TRA_FEE_NAME"] = result[i]["FEE_NAME"];
                        result[i]["TRA_FEE_RK_CODE"] = $("#TRA_RISK_CODE").val();
                        result[i]["TRA_FEE_RK_SYS_ID"] = $("#TRA_SYS_ID").val();
                        result[i]["TRA_FEE_CRTE_BY"] = "Admin";
                        result[i]["TRA_FEE_CRTE_DATE"] = Date.now();
                        result[i]["TRA_FEE_STATUS"] = "U";
                        //
                        // $scope.riskFees_grid.jqGrid('setCell', result[i], 'RISK_CODE', );

                        $scope.riskFees_grid.addRowData(result[i]["MRF_FEE_CODE"], result[i]);
                    }
                }

                var compFeedata = u.get_grid_data($scope.riskFees_grid);
                var linq = Enumerable.From(compFeedata);
                var result =
                    linq.GroupBy(function (x) { return x.TRA_FEE_CODE; })
                        .Select(function (x) {
                            console.log(x);
                            return {
                                POL_FEE_CODE: x.Key(),
                                POL_FEE_NAME: x.source[0]["TRA_FEE_NAME"],
                                POL_FEE_FC_AMOUNT: x.Sum(function (y) { return y.TRA_FEE_FC_AMOUNT | 0; }),
                                POL_FEE_BC_AMOUNT: x.Sum(function (y) { return y.TRA_FEE_BC_AMOUNT | 0; }),
                                POL_FEE_END_NO: 0 //$("#POL_END_NO").val()
                            };
                        }).ToArray();

                $scope.polfees_grid.jqGrid("clearGridData");
                for (var i in result) $scope.polfees_grid.addRowData(result[i].ID, result[i]);
            });
        }


        $("#btn_GetCompFees").on("click", function () {

            getRiskComPulsoryFess();

        });


        /*--------------------------------------------------
           * add Cover
           *------------------------------------------------*/
        //
        $("#btn_add_cover").on('click', function () {

            if (u.form_validation("#coverForm")) {

                if ($("input[name='RCOV_CODE']").val() === "") {
                    u.modal_alert("Please Select Risk Cover");
                }

                u.modal_confirmation("Are you sure you want to add the Cover?", function () {

                    /*
                   obtain parameter for our request
                */
                    var productRiskData = {

                        PRD_CODE: $("#POLH_SUB_CLASS_CODE").val(),
                        //PRD_CV_DFT: 'Y',  
                        CUR_RATE: $("#POLH_CURRENCY_RATE").val(),
                        RCOV_CODE: $("#RCOV_CODE").val(),
                    }; //


                    var grid = $scope.cover_grid;

                    var rowIds = grid.jqGrid('getDataIDs');

                    //declare array to contain the codes to varify
                    var CodeArray = [];

                    // iterate through the rows in the grid and add Covers to Array
                    for (var i = 0, len = rowIds.length; i < len; i++) {
                        var currRow = rowIds[i];

                        //get value of the cell or column in an array
                        var coverCode = grid.jqGrid('getCell', currRow, "RCOV_CODE");

                        var RiskCode = grid.jqGrid('getCell', currRow, "RCOV_RISK_SYS_ID");

                        var riskCov = coverCode + RiskCode;

                        // alert(riskCov);
                        CodeArray.push(riskCov);
                    }

                    //send parameters and get Default covers from the database
                    s.getAddRiskCovers(productRiskData, function (result) {
                        if (result && result.length && result.length > 0) {

                            for (var i in result) {

                                //alert(JSON.stringify(result));

                                result[i]["RCOV_NAME"] = result[i]["MS_UDW_COVERS"]["CVR_NAME"];
                                result[i]["RCOV_TYPE"] = result[i]["MS_UDW_COVERS"]["CVR_TYPE"];

                                result[i]["RCOV_RI_YN"] = result[i]["MS_UDW_COVERS"]["CVR_RI_APPLICABLE"];

                                result[i]["RCOV_USER_PREM"] = result[i]["MS_UDW_COVERS"]["CVR_USER_PREMIUM"];
                                result[i]["RCOV_PREM_REFUND"] = result[i]["MS_UDW_COVERS"]["RCOV_PREM_REFUND"];
                                result[i]["RCOV_RATE_CHANGE"] = result[i]["MS_UDW_COVERS"]["CVR_RATE_CHANGE"];
                                result[i]["RCOV_SI_CHANGE"] = result[i]["MS_UDW_COVERS"]["CVR_SI_CHANGE"];
                                result[i]["RCOV_COVER_LEVEL"] = result[i]["MS_UDW_COVERS"]["RCOV_COVER_LEVEL"];

                                result[i]["RCOV_RISK_SYS_ID"] = $("#TRA_SYS_ID").val();
                                result[i]["RCOV_RISK_NO"] = $("#TRA_RISK_NO").val();
                                //result[i]["RCOV_SI_FC"] = $("#RCOV_SI_FC").val();


                                var deftCoverCode = result[i].RCOV_CODE;
                                var newRiskCode = $("#TRA_SYS_ID").val();

                                var verifyRiskCover = deftCoverCode + newRiskCode; //alert(verifyRiskCover);

                                //add if Cover is not found in the Grid//

                                if ($.inArray(verifyRiskCover, CodeArray) < 0) {

                                    //fill in default covers if not in the grid

                                    $scope.cover_grid.addRowData(result[i].ID, result[i]);
                                    u.hide_confirm();
                                    u.growl_success("Risk Cover successfully added");
                                }
                                else {
                                    u.hide_confirm();
                                    u.growl_warning("Cover exists for this Risk, you cannot add same Cover " + deftCoverCode);

                                }
                            }
                            //
                        }
                        else {
                            u.hide_confirm();
                            u.growl_error("Error occured, please check and try again");
                        }
                    });
                });

            } else {
                u.hide_confirm();
                u.growl_error("Please fill out the fields that are marked red");
            }
        });



        /*--------------------------------------------------
        *get Risks Cover lists fucnction
        *------------------------------------------------*/
        //
        function getRiskCoversLov() {

            /*
                obtain parameter for our request
            */
            var RiskCoverData = {

                PRD_CODE: $("#POLH_SUB_CLASS_CODE").val(),
            }; //
            var grid = $scope.riskCovers_grid;

            var rowIds = grid.jqGrid('getDataIDs');

            //send parameters and get motor Risks from the database
            s.getRiskCoversLOV(RiskCoverData, function (result) {
                if (result && result.length && result.length > 0) {

                    //clear Grid
                    $scope.riskCovers_grid.jqGrid('clearGridData');
                    //fill grid
                    for (var i in result) {

                        $scope.riskCovers_grid.addRowData(result[i]["RCOV_CODE"], result[i]);
                    }
                }
            });
        }


        /*--------------------------------
        *Query Cover Lov
        *------------------------------*/
        //
        $("#btnQueryRiskCoverLov").on('click', function () {

            getRiskCoversLov();
        });


        /*--------------------------------
        *Open Risk Covers LOV Modal
        *------------------------------*/
        //
        $("#btnAddNewCover").on('click', function () {

            if ($("#POLH_CLASS_CODE").val() == "") {

                u.growl_warning("Product Code is empty, Please check and try again");
            }
            else {
                $("#AddNewCoverModal").modal();
            }
        });


        //refresh Cover, Risk and policy Values on closing the Risk Cover Modal
        $("#btn_CoverPrem_Onclose").click(function () {

            if (u.grid_empty($scope.cover_grid)) {
                u.modal_confirmation("The Grid is empty, do you want to close form?", function (e) {
                    $("#RiskCoverModal").modal("hide");
                    u.hide_confirm();
                });
            }
            else {
                $scope.SumCoverRiskValues();
                $("#RiskCoverModal").modal("hide");
            }
        });


        /*----------------------------------------------------
         * Remove record or Mark for deletion from Cover Grid
         *---------------------------------------------------*/
        //
        $("#btn_remove_cover").on('click', function () {

            if (u.grid_empty($scope.cover_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.cover_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'RCOV_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'RCOV_NO');

            var message = "";

            /*---------------------------------
             * Display modal message
             *------------------------------*/
            //
            u.modal_confirmation("Are you sure you want to remove the Record?", function (e) {

                /*--------------------------------------------
                 * Remove newly added record before saving
                 *------------------------------------------*/
                // 
                if (recordStatus == "U") {

                    grid.jqGrid('delRowData', row_id);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid('setCell', row_id, 'RCOV_STATUS', 'D');
                    $('#' + row_id, '#grdCover').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdCover').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'RCOV_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
         * Cover Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_cover").on('click', function () {

            if (u.grid_empty($scope.cover_grid)) return u.growl_info("Cover grid is empty");

            if (u.form_validation("#coverForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Cover?", function () {

                    updateCovers();

                    u.hide_confirm();

                });
            }
        });


        //Edit/Update covers Function
        function updateCovers() {

            var grid = $scope.cover_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var coverCode = grid.jqGrid("getCell", rowId, "RCOV_SYS_ID");

            if (coverCode == $("#RCOV_SYS_ID").val()) {

                //
                CURR_RATE = parseFloat($("#TRAH_CURRENCY_RATE").val()).toFixed(2);

                if (CURR_RATE == "" || CURR_RATE == 0) {
                    u.hide_confirm();
                    u.growl_warning("the Currency Rate cannot be zero (0) please check and try again");
                }
                else {

                    //Declare variables and get values
                    var coverSifc = parseFloat($("#RCOV_SI_FC").val()).toFixed(2);
                    var coverSibc = parseFloat(coverSifc / CURR_RATE).toFixed(2);


                    var coverGrossPremFc = parseFloat($("#RCOV_GROSS_PREM_FC").val()).toFixed(2);
                    var coverGrossPremBc = parseFloat(coverGrossPremFc / CURR_RATE).toFixed(2);

                    var coverNetPremFc = parseFloat($("#RCOV_NET_PREM_FC").val()).toFixed(2);
                    var coverNetPremBc = parseFloat(coverNetPremFc / CURR_RATE).toFixed(2);

                    var coverDisFc = 0;
                    coverDisFc = parseFloat($("#RCOV_DISC_FC").val()).toFixed(2);
                    var coverDisBc = 0;
                    coverDisBc = parseFloat(coverDisFc / CURR_RATE).toFixed(2);

                    var coverLoadFc = parseFloat($("#RCOV_LOAD_FC").val()).toFixed(2);
                    var coverLoadBc = parseFloat(coverLoadFc / CURR_RATE).toFixed(2);
                    //
                    var coverRate = parseFloat($("#RCOV_RATE").val()).toFixed(2);


                    //
                    grid.jqGrid("setCell", rowId, "RCOV_SI_FC", coverSifc);
                    grid.jqGrid("setCell", rowId, "RCOV_SI_BC", coverSifc);

                    grid.jqGrid("setCell", rowId, "RCOV_RATE", coverRate);

                    grid.jqGrid("setCell", rowId, "RCOV_GROSS_PREM_FC", coverGrossPremFc);

                    grid.jqGrid("setCell", rowId, "RCOV_GROSS_PREM_BC", coverGrossPremFc);

                    grid.jqGrid("setCell", rowId, "RCOV_NET_PREM_FC", coverNetPremFc);
                    grid.jqGrid("setCell", rowId, "RCOV_NET_PREM_BC", coverNetPremFc);

                    grid.jqGrid("setCell", rowId, "RCOV_DISC_FC", coverDisFc);
                    grid.jqGrid("setCell", rowId, "RCOV_DISC_BC", coverDisFc);

                    grid.jqGrid("setCell", rowId, "RCOV_LOAD_FC", coverLoadFc);
                    grid.jqGrid("setCell", rowId, "RCOV_LOAD_BC", coverLoadFc);

                    //call
                    $scope.SumCoverRiskValues();


                    u.hide_confirm();
                    u.growl_success("Risk Cover updated");

                }
            }
            else {
                u.hide_confirm();
                u.growl_warning("Please select the correct row to edit");
            }


        }


        /*-----------------------------------
        * exporting of the grid to excel Condition & Clauses
        *----------------------------------*/
        $("#export-cover-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.cover_grid, ["ID"], "Cover_List_Excel");
        });

        function policydisplayno() {

            var seqid = $("#TRA_SYS_ID").val();
            var office = $("#POLH_OFF_CODE").val();
            var subclass = $("#POLH_SUB_CLASS_CODE").val();

            var polyid = $("#POLHP").val();
            var multi = $("#MULTI").val();
            var polyear = $("#POLYEAR").val();

            $("#POLH_DISPLAY_NO").val(polyid + ("-") + multi + ("-") + office + ("-") + subclass + ("-") + polyear + ("-") + seqid);
        }

        $("#btn_risk_cover").click(function () {

            policydisplayno();
            var grid = $scope.travel_grid;
            var sel_id = grid.jqGrid('getGridParam', 'selrow');
            var RiskID = grid.jqGrid('getCell', sel_id, 'TRA_SYS_ID');

            if (RiskID == $("#TRA_SYS_ID").val()) {

                $("#RiskCoverModal").modal();
                //Hide covers not related to selected risk
                $scope.hideShowCovers();
            }
            else {
                u.growl_warning("No Travel Risk selected, Please check and try again");
            };
            //$("#RiskCoverModal").modal();
        });


        /*--------------------------------------------------
         * Travel Risk modal dialog
         *------------------------------------------------*/
        //
        $("#btn_open_travel_form").click(function () {
            if (u.form_validation("#travelheadform")) {
                $("#TravelModal").modal();
            }
            else {
                u.growl_warning("Please fill the Travel Header form and try again");
            };
            //$("#TravelModal").modal();
        });

        $("#btn_tra_Onclose").click(function () {

            if (u.grid_empty($scope.travel_grid)) {
                u.modal_confirmation("The Grid is empty, do you want to close form?", function (e) {
                    $("#TravelModal").modal("hide");
                    u.hide_confirm();
                });
            }
            else {
                $("#TravelModal").modal("hide");
            }
        });
        /*--------------------------------------------------
          * add Travel Person
          *------------------------------------------------*/
        //
        $("#btn_add_travel_details").on('click', function () {

            if (u.form_validation("#travelForm")) {

                //if ($("input[name='TRA_RISK_CODE']").val() === "") return u.modal_alert("Please Enter Risk No");

                $("#TRA_SYS_ID").val("");

                if ($("#TRA_SYS_ID").val() == "") {
                    RetnSequenceNo("INS_TRAVELRISK_SEQ", getVehSeqNo);
                    function getVehSeqNo(data) {
                        $("#TRA_SYS_ID").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add the Travel Details?", function () {

                    var rowIds = $scope.travel_grid.jqGrid('getDataIDs');

                    /*----------------------------------------------
                     * declare array to contain the codes to verify
                     *--------------------------------------------*/
                    //
                    var Code = [];

                    /*------------------------------------------------------------
                     * iterate through the rows and check duplicate each of them
                     *----------------------------------------------------------*/
                    // 
                    for (var i = 0, len = rowIds.length; i < len; i++) {
                        var currRow = rowIds[i];

                        /*------------------------------------------------
                         * get value of the cell or column in an array
                         *----------------------------------------------*/
                        //
                        var cellValue = $scope.travel_grid.jqGrid('getCell', currRow, 'TRA_SYS_ID');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#TRA_SYS_ID').val(), Code) < 0) {

                        var FormData = u.parse_form("#travelForm");
                        FormData.TRA_DECLARATION = "N";
                        FormData.TRA_PDT_CODE = "TR001";
                        FormData.TRA_CVR_CODE = "CVR01";
                        FormData.TRA_POL_CANCELLED = "N";
                        FormData.TRA_STATUS = "U";
                        FormData.TRA_CRTE_BY = "Admin";
                        FormData.TRA_CRTE_DATE = u.get_date();
                        $scope.travel_grid.addRowData(FormData.TRA_SYS_ID, FormData);

                        //Add defaulft covers afer adding the Risk
                        getDefaultRiskCovers();
                        //Add compulsory fees afer adding the Risk
                        getRiskComPulsoryFess();

                        u.hide_confirm();
                        u.growl_success("Travel successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Travel with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        /*----------------------------------------------------
        * Remove record or Mark for deletion from Travel perso Grid
        *---------------------------------------------------*/
        //
        $("#btn_remove_travel_details").on('click', function () {

            if (u.grid_empty($scope.travel_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.travel_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'TRA_STATUS');

            var TraRiskNo = grid.jqGrid('getCell', row_id, 'TRA_SYS_ID');

            var covGrid = $scope.cover_grid;

            var covRowIds = covGrid.jqGrid('getDataIDs');

            var message = "";

            /*---------------------------------
             * Display modal message
             *------------------------------*/
            //
            u.modal_confirmation("Are you sure you want to remove the Record?", function (e) {

                /*--------------------------------------------
                 * Remove newly added record before saving
                 *------------------------------------------*/
                // 
                if (recordStatus == "U") {

                    for (var i = 0, len = covRowIds.length; i < len; i++) {
                        var covCurrRow = covRowIds[i];

                        //get value of the cell or column in an array

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_NO');

                        if (getCovRiskID == TraRiskNo) {

                            covGrid.jqGrid('delRowData', covCurrRow);
                        }
                    }

                    grid.jqGrid('delRowData', row_id);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    for (var i = 0, len = covRowIds.length; i < len; i++) {
                        var covCurrRow = covRowIds[i];

                        //get value of the cell or column in an array

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_NO');

                        if (getCovRiskID == TraRiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'D');
                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'red' });
                        }
                    }
                    covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'D');
                    $('#' + covCurrRow, '#gridAppCovers').css({ color: 'red' });
                    grid.jqGrid('setCell', row_id, 'TRA_STATUS', 'D');
                    $('#' + row_id, '#gridTravelRisks').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#gridTravelRisks').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'TRA_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
        * Edit/Update Function Travel person Grid
        *------------------------------*/
        //
        $("#btn_update_travel_details").on('click', function () {

            if (u.grid_empty($scope.travel_grid)) return u.growl_info("Travel grid is empty");

            if (u.form_validation("#travelForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Travel?", function () {

                    var grid = $scope.travel_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "TRA_SYS_ID");

                    if (code === $("#TRA_SYS_ID").val()) {
                        var data = u.parse_form("#travelForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Travel Details updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*-----------------------------------
         * exporting of the grid to excel Location
         *----------------------------------*/
        $("#export-location-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.travel_grid, ["ID"], "Travel_List_Excel");
        });




        /*-----------------------------------
        * Agent/Broker Commission
        *----------------------------------*/

        $("#btn_agent_comm").click(function () {
            //if (u.grid_empty($scope.motor_grid)) return u.modal_alert("Motor Grid is empty!!!");
            $("#agentcommModal").modal();

        });


        /*--------------------------------------------------
          * Adding Agency/Broker Details
          *------------------------------------------------*/
        //
        $("#btn_add_agencycomm").on('click', function () {

            if (u.form_validation("#agencycommForm")) {

                //if ($("input[name='CMM_INT_CODE']").val() === "") return u.modal_alert("Please Enter Agency/Broker No");

                u.modal_confirmation("Are you sure you want to add the Agency/Broker Details?", function () {


                    var rowIds = $scope.intermCom_grid.jqGrid('getDataIDs');

                    /*----------------------------------------------
                     * declare array to contain the codes to verify
                     *--------------------------------------------*/
                    //
                    var Code = [];

                    /*------------------------------------------------------------
                     * iterate through the rows and check duplicate each of them
                     *----------------------------------------------------------*/
                    // 
                    for (var i = 0, len = rowIds.length; i < len; i++) {
                        var currRow = rowIds[i];

                        /*------------------------------------------------
                         * get value of the cell or column in an array
                         *----------------------------------------------*/
                        //

                        var cellValue = $scope.intermCom_grid.jqGrid('getCell', currRow, 'CMM_INT_CODE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CMM_INT_CODE').val(), Code) < 0) {

                        var FormData = u.parse_form("#agencycommForm");
                        FormData.CMM_END_NO = 0;
                        FormData.CMM_POLH_DOC_NO = 0;
                        FormData.CMM_COB_CODE = $("#POLH_CLASS_CODE").val();
                        FormData.CMM_OFFICE = $("#POLH_OFF_CODE").val();
                        FormData.CMM_STATUS = "U";
                        FormData.CMM_CRTE_BY = "Admin";
                        FormData.CMM_CRTE_DATE = u.get_date();
                        FormData.CMM_COM_DATE = u.get_date();
                        $scope.intermCom_grid.addRowData(FormData.CMM_INT_CODE, FormData);

                        //
                        $('#CMM_INT_CODE').val("");
                        $('#CMM_AGB_NAME').val("");
                        $('#CMM_COM_PERC').val("");
                        u.hide_confirm();
                        //get commission Amounts
                        calculateIntermediaryComm();
                        //
                        u.growl_success("Intermediary successfully added to grid");


                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("Intermediary with code " + cellValue + " Already exists");
                    }
                });

            }
            else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        // Deleting
        $("#btn_remove_agencycomm").on('click', function () {

            if (u.grid_empty($scope.intermCom_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.intermCom_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CMM_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'CMM_INT_CODE');

            var message = "";

            /*---------------------------------
             * Display modal message
             *------------------------------*/
            //
            u.modal_confirmation("Are you sure you want to remove the Record?", function (e) {

                /*--------------------------------------------
                 * Remove newly added record before saving
                 *------------------------------------------*/
                // 
                if (recordStatus == "U") {
                    grid.jqGrid('delRowData', row_id);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid('setCell', row_id, 'CMM_STATUS', 'D');
                    $('#' + row_id, '#grdIntermediaryComm').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdIntermediaryComm').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CMM_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        // Updating
        $("#btn_update_agencycomm").on('click', function () {

            if (u.grid_empty($scope.intermCom_grid)) return u.growl_info("Commission grid is empty");

            if (u.form_validation("#agencycommForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Cover?", function () {

                    var grid = $scope.intermCom_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "CMM_COB_CODE");

                    if (code === $("input[name='CMM_COB_CODE']").val()) {
                        var data = u.parse_form("#agencycommForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Agency/Broker updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        $("#btn_Intermediary_comm").on("click", function () {

            $("#interCommLovModal").modal();

        });
        //
        $("#IntermCommLov").on("click", function () {

            // getInterCommLov();
            /*
                obtain parameter for our request
            */
            var interParamData = {
                PROD_CODE: $("#POLH_SUB_CLASS_CODE").val(),
            };

            // gridinterComm 
            var intgrid = $scope.interComm_grid;

            var rowIds = intgrid.jqGrid("getDataIDs");

            //send parameters and get motor Risks from the database
            s.get_lov_Intermediary_Comm(interParamData, function (result) {

                if (result && result.length && result.length > 0) {

                    //clear Grid
                    $scope.interComm_grid.jqGrid("clearGridData");
                    //fill grid
                    for (var i in result) {
                        result[i]["COM_NAME"] = result[i]["MS_SYS_INTERMEDIARY"]["INT_OFFICIAL_NAME"];
                        $scope.interComm_grid.addRowData(result[i].ID, result[i]);
                    }
                }
            });
        });



        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on('click', function () {

            /*-----------------------------------------------
             * setup validation before sending save request
             *---------------------------------------------*/
            var Pol_Txn_State = $("#POLH_TXN_STATE").val();
            if (Pol_Txn_State === "C") return u.growl_warning("The Policy is already Confirmed, Please unconfirm before saving");
            if (Pol_Txn_State === "P") return u.growl_warning("The Policy is Approved, You cannot save the Policy");

            if (!u.form_validation("#polheaderForm")) {
                return u.growl_warning("Please fill the fields that are marked red");
            }

            if (!u.form_validation("#travelheadform")) {
                return u.growl_warning("Please fill the fields that are marked red");
            }

            if (u.grid_empty($scope.travel_grid)) {
                return u.growl_warning("Please add Travel person(s) Details");
            }

            if (u.grid_empty($scope.cover_grid)) {
                return u.growl_warning("Please add Risk Cover");
            }

            u.modal_confirmation("Are you sure you want to save?", function (e) {

                var polhData = u.parse_form("#polheaderForm");

                //polhData.POLH_STATUS = "U";
                //polhData.POLH_TXN_STATE = "S";
                //polhData.POLH_END_NO = 0;

                var travl_head_data = u.parse_form("#travelheadform");
                travl_head_data.TRAH_POLH_END_NO = 0;
                polhData.INS_UDW_TRAVEL_RISK_HEAD = [travl_head_data];

                polhData.INS_UDW_TRAVEL_RISK = u.get_grid_data($scope.travel_grid);

                var INS_UWD_RISK_COVERS = u.get_grid_data($scope.cover_grid);

                for (var i in polhData.INS_UDW_TRAVEL_RISK) {
                    //loop through every risk and obtain the sys_id of the risk
                    var id = polhData.INS_UDW_TRAVEL_RISK[i]["TRA_SYS_ID"];
                    polhData.INS_UDW_TRAVEL_RISK[i]["INS_UWD_RISK_COVERS"] = [];
                    for (var y in INS_UWD_RISK_COVERS) {
                        //find covers which have the same the same risk sys_id
                        if (INS_UWD_RISK_COVERS[y]["RCOV_RISK_SYS_ID"] === id) {
                            polhData.INS_UDW_TRAVEL_RISK[i]["INS_UWD_RISK_COVERS"].push(INS_UWD_RISK_COVERS[y]);
                        }
                    }

                }

                console.log(polhData);
                polhData.INS_UDW_TRAVEL_FEES = u.get_grid_data($scope.riskFees_grid);
                polhData.INS_UDW_POL_FEES = u.get_grid_data($scope.polfees_grid);
                polhData.INS_UWD_INTERMEDIARY_COMM = u.get_grid_data($scope.intermCom_grid);

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_policy(polhData, function (responseData) {
                        $scope.saving = false;
                        u.hide_confirm();
                        if (responseData.state) {

                            /*--------------------------------
                             * update form status
                             *-------------------------------*/

                            var coverRowIds = $scope.cover_grid.jqGrid("getDataIDs");
                            var travelRowIds = $scope.travel_grid.jqGrid("getDataIDs");

                            var covRecStatus;

                            /*---------------------------------
                             * update travel person row status
                             *-------------------------------*/
                            for (var i = 0; i < travelRowIds.length; i++) {
                                covRecStatus = $scope.travel_grid.jqGrid("getCell", travelRowIds[i], "TRA_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    $scope.travel_grid.jqGrid("delRowData", travelRowIds[i]);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    $scope.travel_grid.jqGrid("setCell", travelRowIds[i], "TRA_STATUS", "A");
                                }
                            }


                            /*--------------------------------
                             * update cover row items status
                             *-------------------------------*/
                            for (var i = 0; i < coverRowIds.length; i++) {

                                covRecStatus = $scope.cover_grid.jqGrid("getCell", coverRowIds[i], "RCOV_STATUS");

                                //Delete risk row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    $scope.cover_grid.jqGrid("delRowData", coverRowIds[i]);
                                }
                                //Update risk row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    $scope.cover_grid.jqGrid("setCell", coverRowIds[i], "RCOV_STATUS", "A");
                                }
                            }

                            u.fill_form(responseData.result, "#polheaderForm");

                            //alert(JSON.stringify(responseData.result));

                            u.growl_success(responseData.message);

                        } else {
                            u.hide_confirm();
                            u.growl_error(responseData.mesage);
                        }
                    }, function (err) {
                        u.hide_confirm();
                        u.growl_error("Server Error please try again later.");
                    });
                }
                else {
                    u.growl_infor("Server busy, please wait for current process to finish!");
                }
            });
        });


        //Policy Process Modal
        $("#btnProcessPolicy").on("click", function () {

            if (!u.field_empty("#POLH_SYS_ID")) {
                $("#PolicyProcessingModal").modal();
            } else {
                u.growl_warning("There is no policy to Process, please check and try again");
            }

        });


        //Policy Process Options Modal
        $("#btnProcess").on("click", function () {

            var e = document.getElementById("SelPolicyProcess");
            var polProcess = e.options[e.selectedIndex].value;
            var polTxnState = $("#POLH_TXN_STATE").val();

            if (polProcess === "") {
                u.growl_warning("Nothing selected, Please select to Process");
            }

                //Confirmation Modal
            else if (polProcess === "Confirm") {

                if (!u.field_empty("#POLH_SYS_ID")) {


                    if (polTxnState === "C") return u.growl_warning("The Policy is already Confirmed, You cannot Confirm them again");
                    if (polTxnState === "P") return u.growl_warning("The Policy is Approved, You cannot Confirm again");
                    if (polTxnState === "") return u.growl_warning("The Policy is not saved, You cannot Confirm it");

                    if (polTxnState === "E" || polTxnState === "S") {

                        $("#PolConfirmModal").modal();

                    }

                }
                else {
                    u.modal_warning("There is no Policy to process");
                }
            }


            else if (polProcess === "UnConfirm") {

                if (!u.field_empty("#POLH_SYS_ID")) {

                    u.modal_warning("Unconfirm hereeeeeeeeeeeeeeeeeeeee");
                }
                else {
                    u.modal_warning("There is no Policy to Process");
                }

            }
                //Endorsement Modal
            else if (polProcess === "Endorse") {

                if (!u.field_empty("#POLH_SYS_ID")) {

                    if (polTxnState === "P") {
                        $("#PolicyEndorsementModal").modal();

                        $("#PolicyProcessingModal").modal("hide");

                        var sysId = $("#POLH_SYS_ID").val();
                        var endNo = $("#POL_END_NO").val();
                        var premAmtFc = $("#POLH_POL_PREM_FC").val();
                        var premAmtBc = $("#POLH_POL_PREM_BC").val();
                        $("#APP_POLH_ID").val(sysId);
                        $("#APP_END_NO").val(endNo);
                        $("#APP_PREM_FC").val(premAmtFc);
                        $("#APP_PREM_BC").val(premAmtBc);
                        $("#APPROVE_DATE").val("01/01/2017");
                        //     
                    } else {
                        u.growl_warning("The Policy must be Approved, efore endorsement, Please check and try again");
                    }
                }
                else {
                    u.modal_warning("There is no Policy to Process");
                }

            }
            else if (polProcess === "UnEndorse") {

                if (!u.field_empty("#POLH_SYS_ID")) {
                    //   btnEndDeletion EndmtDeletionModal

                    if (polTxnState === "E") {

                        $("#EndmtDeletionModal").modal();
                        $("#PolicyProcessingModal").modal("hide");

                        var SYS_ID = $("#POLH_SYS_ID").val();
                        var end_No = $("#POL_END_NO").val();

                        //     
                    } else {
                        u.growl_warning("The Policy must be in endorsement state before Endorsement deletion, Please check and try again");
                    }

                }
                else {
                    u.modal_warning("There is no Policy to Process");
                }

            }


                //Approval Modal
            else if (polProcess === "Approve") {

                if (!u.field_empty("#POLH_SYS_ID")) {

                    if (polTxnState === "P") return u.growl_warning("The Policy is already Approved");

                    if (polTxnState === "C") {


                        $("#PolicyApprovalModal").modal();

                        var SYS_ID = $("#POLH_SYS_ID").val();
                        var end_No = $("#POL_END_NO").val();
                        var premAmtFC = $("#POLH_POL_PREM_FC").val();
                        var premAmtBC = $("#POLH_POL_PREM_BC").val();
                        $("#APP_POLH_ID").val(SYS_ID);
                        $("#APP_END_NO").val(end_No);
                        $("#APP_PREM_FC").val(premAmtFC);
                        $("#APP_PREM_BC").val(premAmtBC);
                        $("#APPROVE_DATE").val("01/01/2017");
                        //     
                    } else {
                        u.growl_warning("The Policy must be in a confirmed state before Approval, Please check and try again");
                    }
                }
                else {
                    u.modal_warning("There is no Policy to Process");
                }

            }


        });


        /*------------------------------
        *  Policy Endorsement process
        *----------------------------*/
        //
        $("#btnEndorse").on('click', function () {
            u.modal_confirmation("Are you sure you want to pass an endorsement on the Policy?", function (e) {

                // Reset the Policy header to endorsement state
                var endNo = parseInt($("#POLH_END_NO").val()) + 1;

                $("#POLH_END_NO").val(endNo);
                $("#POLH_TXN_STATE").val("E");

                //

                var travelRowIds = $scope.travel_grid.jqGrid("getDataIDs");
                var coverRowIds = $scope.cover_grid.jqGrid("getDataIDs");
                var intermComIds = $scope.intermCom_grid.jqGrid("getDataIDs");
                var premiumregIds = $scope.premiumreg_grid.jqGrid("getDataIDs");
                var riskFeesIds = $scope.riskFees_grid.jqGrid("getDataIDs");
                var polfeesIds = $scope.polfees_grid.jqGrid("getDataIDs");

                /*---------------------------------
                    $scope.   
                     * update Endorsement No in the Grids
                     *-------------------------------*/
                //Travel Risks
                for (var i = 0; i < travelRowIds.length; i++) {

                    $scope.travel_grid.jqGrid("setCell", travelRowIds[i], "TRA_POLH_END_NO", endNo);
                }
                //Risk Covers
                for (var j = 0; j < coverRowIds.length; j++) {

                    $scope.travel_grid.jqGrid("setCell", coverRowIds[j], "RPCOV_END_NO", endNo);
                }
                //Commissions
                for (var k = 0; k < intermComIds.length; k++) {

                    $scope.intermCom_grid.jqGrid("setCell", intermComIds[k], "CMM_END_NO", endNo);
                }
                //Prem Register
                for (var l = 0; l < premiumregIds.length; l++) {

                    $scope.premiumreg_grid.jqGrid("setCell", premiumregIds[l], "PR_END_NO", endNo);
                }
                //Risk Fees
                for (var m = 0; m < riskFeesIds.length; m++) {

                    $scope.riskFees_grid.jqGrid("setCell", riskFeesIds[m], "VEH_FEE_END_NO", endNo);
                }
                //Pol fees summary
                for (var n = 0; n < polfeesIds.length; n++) {

                    $scope.polfees_grid.jqGrid("setCell", polfeesIds[n], "POL_FEE_END_NO", endNo);
                }
                // to do for the rest of the grids

                u.form_text_Gold_color();

                u.growl_success("The Policy is ready for Endorsement, Please SAVE to continue");

                u.hide_confirm();
                $("#PolicyEndorsementModal").modal("hide");
            });
        });


        /*---------------------------
       *Endorsement Deletion process
       *-------------------------*/
        $("#btnEndDeletion").click(function () {
            u.modal_confirmation("Are you sure you want to delete Endorsement?", function () {
                if (!u.field_empty("#POLH_SYS_ID") && !u.field_empty("#POLH_END_NO")) {

                    s.risk_end_deletion($("#POLH_SYS_ID").val(), (parseInt($("#POLH_END_NO").val()) - 1), function (result) {
                        if (result) {

                            s.search_policy($("#POLH_SYS_ID").val(), function (data) {
                                $scope.searched = true;
                                $scope.result = data;
                                if (data.length > 0) {
                                    $scope.search_fill(data[0]);
                                }
                            });

                        } else {
                            u.growl_info("Unable to delete endorsement, please try again");
                        }
                        u.hide_confirm();
                    },
                        function (err) {
                            u.growl_error("Error fetching search results");
                        });
                } else {
                    u.growl_info("Invalid Policy, please check and try again!");
                }
            });
        });


        // policy Confirmation process 

        $("#btnConfirm").click(function () {
            u.modal_confirmation("Are you sure you want to Confirm ?", function () {
                s.confirmPolicy($("#POLH_SYS_ID").val(), function (response) {
                    if (response.state) {

                        // Change policy transaction state to Confirmed -  C
                        var txnState = response.POLH_TXN_STATE;

                        //alert(txnState);
                        u.growl_success(response.message);


                        $("#POLH_TXN_STATE").val(txnState);
                        u.form_text_Blue_color();

                    } else {
                        u.growl_error(response.message);
                    }
                }, function () {
                    u.growl_error("Server Error Confirming Policy");
                });

                u.hide_confirm();
            });
        });


        //Approval Process

        $("#btnApproval").click(function () {
            if ($("#POLH_STATUS").val() === "" || $("#POL_END_NO").val() == "A")

                if (u.field_empty("#POLH_SYS_ID")) return u.growl_warning("There is no Policy to Approve, please Check and try again");
            if ($("#POLH_SYS_ID").val() === "A") return u.growl_warning("There is no Policy to Approve, please Check and try again");

            if (!u.form_validation("#receiptHeaderForm")) return u.growl_warning("Fields marked red are required");

            u.modal_confirmation("Are you sure you want to Approve ?", function () {
                s.TravelpolicyApproval({ POL_SYS_ID: $("#POLH_SYS_ID").val(), POL_END_NO: 0, TXN_TYPE: 1 }, function (response) {
                    if (response.state) {
                        u.growl_success("Policy successfully Approved");
                        //alert(JSON.stringify(response));

                        //alert(JSON.stringify());

                        var txnState = response.result.POLH_TXN_STATE;

                        $("#POLH_TXN_STATE").val(txnState);

                        $("#POLH_TXN_STATE").val(txnState);
                        if (txnState === ("P")) {

                            u.form_text_Green_color();
                            //u.form_readonly();
                        }

                    } else {
                        u.growl_error(response.message);
                    }
                }, function () {
                    u.growl_error("Server Error Confirming Policy");
                });
                u.hide_confirm();
            });
        });


        /*--------------------
         * Policy Form delete button
         *------------------*/
        $("#btnDelete").click(function () {
            u.modal_confirmation("Are you sure you want to delete this policy?", function () {
                if ($("input[name='POLH_SYS_ID']").val().length <= 0) {
                    $scope.reset_setup();
                    u.hide_confirm();
                } else {
                    if (!$scope.saving) {
                        $scope.saving = true;
                        var policy_data = u.parse_form("#polheaderForm");
                        policy_data.POLH_STATUS = "D";
                        s.save_policy(policy_data,
                            function (response) {
                                u.hide_confirm();
                                $scope.saving = false;
                                if (response.state) {
                                    u.growl_error("Policy Successfully Deleted");
                                    $scope.reset_setup();
                                } else {
                                    u.growl_error("Error deleting Policy");
                                }
                            },
                            function () {
                                u.hide_confirm();
                                $scope.saving = false;
                                u.growl_error("Can not delete Policy at the moment please try again later");
                            });
                    } else {
                        u.growl_info("The application is busy please wait for the current process to finish");
                    }
                }

            });
        });


        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //
        $("#btn_Reset").on('click', function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#polheaderForm");
                u.form_reset("#coverForm");
                u.form_reset("#travelForm");
                u.form_reset("#travelheadform");
                $scope.cover_grid.jqGrid('clearGridData');
                $scope.travel_grid.jqGrid('clearGridData');
                $scope.trariskhead_grid.jqGrid('clearGridData');
                u.hide_warning();
                u.growl_success("Form successfully cleared");
            });

        });


        /*-----------------
 * search grid
 *----------------*/
        $scope.search_grid = u.default_grid("#grdSearchResults", "#grdSearchResultsPager", "Product Search Results",
            ["ID", "Policy No.", "Policu Document No.", "Proposal No.", "index"],
            [
                { name: "POLH_SYS_ID", index: "POLH_SYS_ID", hidden: true },
                { name: "POLH_SYS_ID", index: "POLH_SYS_ID" },
                { name: "POLH_DOC_NO", index: "POLH_DOC_NO" },
                { name: "POLH_STATUS", index: "POLH_STATUS" },
                { name: "index", id: true, index: "index", hidden: true }
            ],
            function (index) {
                $scope.selected_index = index;
                $scope.search_fill($scope.result[index]);
            },
            function (index) {
                $scope.search_fill($scope.result[index]);
                u.clear_grid_data($scope.search_grid);
                $("#mySearchResultModal").modal("hide");
            });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryPolicy").click(function () {
            var query = $("#txtSearch").val();
            if (query && query.length > 0 && query !== " ") {
                s.search_policy(query, function (result) {
                    $scope.searched = true;
                    $scope.result = result;
                    if (result.length > 0) {
                        if (result.length > 1) {
                            /*display result of the search to the user in a modal*/
                            for (var i in result) {
                                result[i].index = i;
                                $scope.search_grid.addRowData(result[i].index, result[i]);
                            }
                            $("#mySearchResultModal").modal();
                        } else {

                            $scope.search_fill(result[0]);
                           
                        }
                    } else {
                        u.growl_info("Policy No. not found, please make sure you enter the correct Policy No!");
                    }
                },
                    function (err) {
                        u.growl_error("Error fetching search results");
                    });
            } else {
                u.growl_info("Please check Policy No and try again!");
            }
        });


        $scope.search_fill = function (policy) {

            $scope.travel_grid.jqGrid("clearGridData");
            $scope.cover_grid.jqGrid("clearGridData");

            u.fill_form(policy, "#polheaderForm");

            u.fill_form(policy, "#travelheadform");

            u.clear_grid_data($scope.travel_grid);
            if (policy.INS_UDW_TRAVEL_RISK) {
                for (var i in policy.INS_UDW_TRAVEL_RISK) {
                    $scope.travel_grid.addRowData(policy.INS_UDW_TRAVEL_RISK[i].TRA_POLH_SYS_ID, policy.INS_UDW_TRAVEL_RISK[i]);
                }

                if (policy["POLH_TXN_STATE"] === "X") {
                    //canceled
                    // u.form_readonly();
                    u.form_text_Red_color();
                }
                if (policy["POLH_TXN_STATE"] === "C") {

                    //confirmed
                    u.form_text_Blue_color();
                    //u.form_readonly();
                }
                if (policy["POLH_TXN_STATE"] === "P") {
                    //approved                  
                    u.form_text_Green_color();
                    // u.form_readonly();
                }

                if (policy["POLH_TXN_STATE"] === "E") {
                    //endorse                    
                    u.form_text_Gold_color();
                    // u.formReadWrite();
                }

            }
         
            u.clear_grid_data($scope.cover_grid);
            for (var x in policy.INS_UDW_TRAVEL_RISK[i].INS_UWD_RISK_COVERS) {
                //get Cover Names
                policy.INS_UDW_TRAVEL_RISK[i].INS_UWD_RISK_COVERS[x]["RCOV_NAME"] = policy.INS_UDW_TRAVEL_RISK[i].INS_UWD_RISK_COVERS[x]["MS_UDW_COVERS"]["CVR_NAME"];
                //get Covers
                $scope.cover_grid.addRowData(policy.INS_UDW_TRAVEL_RISK[i].INS_UWD_RISK_COVERS[x].RCOV_RISK_SYS_ID, policy.INS_UDW_TRAVEL_RISK[i].INS_UWD_RISK_COVERS[x]);
            }
        };


        /*-------------------------------------
      * setting datepicker for date fields
      *------------------------------------*/
        u.set_datepicker("input[name='POLH_POL_START_DATE']");
        u.set_datepicker("input[name='POLH_POL_END_DATE']");
        u.set_datepicker("input[name='TRA_START_DATE']");
        u.set_datepicker("input[name='TRA_END_DATE']");
        //u.set_datepicker("input[name='TRA_DOB']");
        u.set_datepicker("input[name='TRA_EXPIRY_DATE']");
        u.set_datepicker("input[name='CUS_DOB']");

        /*-----------------------------
        * LOV code validation
        *---------------------------*/
        u.lovCodeVal("form input[name='POLH_CMP_CODE']", "check_company_code", "form input[name='CMP_NAME']");
        u.lovCodeVal("form input[name='POLH_INTERMIDIARY']", "check_intermediary_code", "form input[name='INT_OFFICIAL_NAME']");
        u.lovCodeVal("form input[name='POLH_OFF_CODE']", "check_office_code", "form input[name='OFF_NAME']");
        u.lovCodeVal("form input[name='POLH_CLASS_CODE']", "check_product_code", "form input[name='COB_NAME']");
        u.lovCodeVal("form input[name='POLH_SUB_CLASS_CODE']", "check_subproduct_code", "form input[name='PDT_NAME']");
        u.lovCodeVal("form input[name='POLH_INS_SOURCE']", "check_insurance_source_code", "form input[name='INSUR_NAME']");
        u.lovCodeVal("form input[name='POLH_CHANNEL_CODE']", "check_channel_code", "form input[name='MSC_NAME']");
        u.lovCodeVal("form input[name='POLH_BIZ_SOURCE']", "check_business_source_code", "form input[name='SRB_NAME']");

        u.lovCodeVal("input[name='POLH_CUST_CODE']", "check_customer_code", "input[name='CUS_OFFICIAL_NAME']", function (code) {
            /*fetch customer details after successful validation*/
            s.get_customer(code, function (response) {
                u.fill_form(response, "#polheaderForm");
            });
        });
        u.lovCodeVal("form input[name='CUS_TYPE_CODE']", "check_customertype_code", "form input[name='CUS_TYPE_NAME']");


        /*-----------------------------
        *   // RIsk Cover Rate Calculation
        *---------------------------*/

        $('#RCOV_GROSS_PREM_FC').prop('disabled', true);
        $('#RCOV_NET_PREM_FC').prop('disabled', true);

        document.getElementById("RCOV_RATE").addEventListener("focusout", rateFunction);
        document.getElementById("RCOV_SI_FC").addEventListener("focusout", rateFunction);

        function rateFunction() {
            //alert("Input field lost focus.");
            var grossPremFC = "";
            var grossPremBC = "";
            var NetPremFC = "";
            var NetPremBC = "";
            var ExchangeRate = $('#TRAH_CURRENCY_RATE').val();

            if ($('#RCOV_SI_FC').val() == "" || $('#RCOV_SI_FC').val() == 0 || $('#RCOV_RATE').val() == "" || $('#RCOV_RATE').val() <= 0 || $('#RCOV_RATE').val() > 100) {
                u.growl_warning("Please Check the RATE or SUM INSURED values");
            }
            else {
                grossPremFC = ($('#RCOV_SI_FC').val() * $('#RCOV_RATE').val() * 0.01).toFixed(2);
                //grossPremBC = parseFloat(grossPremFC / ExchangeRate).toFixed(2);

                NetPremFC = ($('#RCOV_SI_FC').val() * $('#RCOV_RATE').val() * 0.01).toFixed(2);
                //NetPremBC = parseFloat(NetPremFC / ExchangeRate).toFixed(2);

                $('#RCOV_GROSS_PREM_FC').val(grossPremFC);
                $('#RCOV_GROSS_PREM_BC').val(grossPremFC);

                $('#RCOV_NET_PREM_FC').val(NetPremFC);
                $('#RCOV_NET_PREM_BC').val(NetPremFC);

            }

        }


        /*-----------------------------
        * //Add new customer modal dialog form
        *---------------------------*/

        $("#customerSetupBtn").click(function () {
            /*obtain the customer code*/
            if (!u.field_empty("input[name='POLH_CUST_CODE']")) {
                s.get_customer($("input[name='POLH_CUST_CODE']").val(),
             function (response) {
                 u.fill_form(response, "#customerForm");
             });
            }

            /*open the customer setup modal*/
            $("#customerSetupModal").modal();
        });


        /*-----------------------------
         * Save/Update Customer
         *---------------------------*/
        //
        $("#btn_Save_Customer").on('click', function () {

            if (!u.form_validation("#customerForm")) {
                return u.growl_warning("Please fill the fields that are marked red");
            }

            u.modal_confirmation("Are you sure you want to save?", function (e) {

                var customerData = u.parse_form("#customerForm");

                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_customers(customerData, function (responseData) {
                        $scope.saving = false;

                        if (responseData.state) {

                            u.hide_confirm();
                            u.growl_success(responseData.message);


                        } else {
                            u.growl_error(responseData.message);
                        }

                    }, function () {
                        u.hide_confirm();
                        u.growl_error("Server Please try again Later");
                    });
                }

            });
        });


        //Checking Passport expiring date in a month ahead/

        document.getElementById("TRA_EXPIRY_DATE").addEventListener("focusout", fcnPass);

        function fcnPass() {
            var padate = $('#TRA_EXPIRY_DATE').val();
            var traenddate = $('#POLH_POL_END_DATE').val();

            var trahend = new Date(traenddate);
            var pa = new Date(padate);
            //check passport date for additional month
            trahend.setMonth(trahend.getMonth() + 1);
            //var exp = new Date();
            //exp.setMonth(exp.getMonth() + 6);

            if (pa <= trahend) {
                u.growl_warning("Passport expires in less than One month");
            }

            
        }


        //Policy Period days calculations/

        document.getElementById("POLH_POL_START_DATE").addEventListener("focusout", fxnPolPeriodDays);
        document.getElementById("POLH_POL_END_DATE").addEventListener("focusout", fxnPolPeriodDays);


        function fxnPolPeriodDays() {
            //alert("Input field lost focus.");
            var SDate = $("#POLH_POL_START_DATE").val();
            var EDate = $("#POLH_POL_END_DATE").val();

            //set the start date to same as policy start date
            $("#TRAH_START_DATE").val(SDate);
            $("#TRAH_END_DATE").val(EDate);

            $("#TRAH_CURRENCY").val($("#POLH_CURRENCY").val());
            $("#TRAH_CURRENCY_RATE").val($("#POLH_CURRENCY_RATE").val());

            $("#TRAH_RISK_CODE").val($("#POLH_SUB_CLASS_CODE").val());
            $("#TRAH_RISK_NAME").val($("#PDT_NAME").val());
            //
            var StartDate = new Date(SDate);
            var EndDate = new Date(EDate);

            var polPeriodDays = u.get_dateDifference(StartDate, EndDate);
            var weekDiff = Math.floor((EndDate - StartDate + 1) / (1000 * 60 * 60 * 24) / 7);
            if (polPeriodDays > 0) {
                $("#POLH_POL_DAYS").val(polPeriodDays);
                $("#TRAH_DAYS").val(polPeriodDays);
                $("#TRAH_WEEKS").val(weekDiff);

            }
            else if ((polPeriodDays <= 0)) {
                u.growl_warning("Policy End date cannot be less than or equal to start date");

                //reset end date and no. of days
                $("#POLH_POL_END_DATE").val('');
                $("#POLH_POL_DAYS").val('');
                // 
                $("#TRAH_END_DATE").val('');
                $("#TRAH_DAYS").val('');
            }
            else {

            }
        }

        //---//Risk period days
        document.getElementById("TRAH_START_DATE").addEventListener("focusout", fxnRiskPeriodDays);
        document.getElementById("TRAH_END_DATE").addEventListener("focusout", fxnRiskPeriodDays);
        function fxnRiskPeriodDays() {
            //alert("Input field lost focus.");
            var polStartDate = new Date($("#POLH_POL_START_DATE").val());
            var PolEndDate = new Date($("#POLH_POL_END_DATE").val());

            var riskStartDate = new Date($("#TRAH_START_DATE").val());
            var riskEndDate = new Date($("#TRAH_END_DATE").val());

            var riskPeriodDays = u.get_dateDifference(riskStartDate, riskEndDate);

            if (u.get_dateDifference(polStartDate, riskStartDate) < 0) {
                u.growl_warning("Risk Start date cannot be less than Policy start date");
            }
            else if (u.get_dateDifference(PolEndDate, riskEndDate) > 0) {
                u.growl_warning("Risk End date cannot be greater than Policy End date");
            }
            else {

                if (riskPeriodDays > 0) {
                    $("#TRAH_DAYS").val(riskPeriodDays);
                }
            }


            if ((riskPeriodDays <= 0)) {
                u.growl_warning("Risk End date cannot be less than or equal to start date");

                //reset end date and no. of days
                $("#TRAH_START_DATE").val('');
                $("#TRAH_END_DATE").val('');

            }
            else if ((riskPeriodDays > 365)) {
                u.growl_warning("Risk period cannot be greater than 365 days, please check and try again");
            }


            // alert(diffDays(StartDate, EndDate));
        }


        /*
        //Hide or show Covers in the Risk Covers (to filter out the covers for particular risk
        */
        $scope.hideShowCovers = function () {

            //get the selected Risk ID
            var vehgrid = $scope.travel_grid;
            var selId = vehgrid.jqGrid("getGridParam", "selrow");
            var vehRiskId = vehgrid.jqGrid("getCell", selId, "TRA_SYS_ID");

            //get the Risk Cover data
            var covgrid = $scope.cover_grid;
            var rowIds = covgrid.jqGrid("getDataIDs");


            // iterate through the risk cover rows to hide or show covers 

            for (var i = 0, len = rowIds.length; i < len; i++) {

                //get value of the cell or column in an array
                var currRow = rowIds[i];

                var getRiskCovId = covgrid.jqGrid("getCell", currRow, "RCOV_RISK_SYS_ID");


                if (getRiskCovId != vehRiskId) {

                    //hide if covers are not for the selected risk 
                    $("#" + currRow).hide();

                }
                else if (getRiskCovId == vehRiskId) {

                    //Show if covers are for the selected risk 
                    $("#" + currRow).show();

                }
            }

        };


        // Cover level SI and Premium Calculations:
        $("#btn_get_Cover_Premiums").click(function () {

            $scope.SumCoverRiskValues();

        });


        // calculate sum of cover amounts
        $scope.SumCoverRiskValues = function () {

            //Declare variables
            var riskSumSifc = 0;
            var riskSumSibc = 0;

            var sumGrossPremFc = 0;
            var sumGrossPremBc = 0;

            var sumNetPremFc = 0;
            var sumNetPremBc = 0;

            var sumLoadFc = 0;
            var sumLoadBc = 0;

            var sumDisFc = 0;
            var sumDisBc = 0;

            //Risk/Travel Grid
            var riskgrid = $scope.travel_grid;

            var rowIdRisk = riskgrid.jqGrid("getDataIDs");

            var grid = $scope.cover_grid;

            var rowIds = grid.jqGrid('getDataIDs');

            //Risk/Travel Grid
            var riskgrid = $scope.travel_grid;

            var riskRowId = riskgrid.jqGrid("getGridParam", "selrow");

            var riskId = riskgrid.jqGrid("getCell", riskRowId, "TRA_SYS_ID");

            // iterate through the rows and check if it exists each of them
            for (var i = 0, len = rowIds.length; i < len; i++) {
                var currRow = rowIds[i];

                //get the risk sys ID from the covers grid
                var getbondID = grid.jqGrid('getCell', currRow, "RCOV_RISK_SYS_ID");

                //get Cover type of the cover
                var coverType = grid.jqGrid('getCell', currRow, "COVER_TYPE");

                if (getbondID != riskId) {
                    $("#" + currRow).hide();

                }
                else {

                    //
                    $("#" + currRow).show();
                    if (coverType == "O") {
                        // if the cover type is own damage then the SI is added to to be considered as risk Sum insured
                        riskSumSifc += parseFloat(grid.jqGrid('getCell', currRow, "RCOV_SI_FC"));
                        riskSumSibc += parseFloat(grid.jqGrid('getCell', currRow, "RCOV_SI_BC"));
                    }
                    riskSumSifc += parseFloat(grid.jqGrid('getCell', currRow, "RCOV_SI_FC"));
                    riskSumSibc += parseFloat(grid.jqGrid('getCell', currRow, "RCOV_SI_BC"));

                    sumGrossPremFc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_GROSS_PREM_FC"));
                    sumGrossPremBc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_GROSS_PREM_BC"));

                    sumNetPremFc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_NET_PREM_FC"));
                    sumNetPremBc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_NET_PREM_BC"));

                    sumLoadFc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_LOAD_FC"));
                    sumLoadBc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_LOAD_BC"));

                    sumDisFc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_DISC_FC"));
                    sumDisBc += parseFloat(grid.jqGrid("getCell", currRow, "RCOV_DISC_BC"));
                }
            }

            grid.jqGrid("footerData", "set", { 'RCOV_SI_FC': riskSumSifc.toFixed(2) });
            grid.jqGrid("footerData", "set", { 'RCOV_SI_BC': riskSumSibc.toFixed(2) });

            grid.jqGrid("footerData", "set", { 'RCOV_GROSS_PREM_FC': sumGrossPremFc.toFixed(2) });
            grid.jqGrid("footerData", "set", { 'RCOV_GROSS_PREM_BC': sumGrossPremBc.toFixed(2) });

            grid.jqGrid("footerData", "set", { 'RCOV_NET_PREM_FC': sumNetPremFc.toFixed(2) });
            grid.jqGrid("footerData", "set", { 'RCOV_NET_PREM_BC': sumNetPremBc.toFixed(2) });

            grid.jqGrid("footerData", "set", { 'RCOV_LOAD_FC': sumLoadFc.toFixed(2) });
            grid.jqGrid("footerData", "set", { 'RCOV_LOAD_BC': sumLoadBc.toFixed(2) });

            grid.jqGrid("footerData", "set", { 'RCOV_DISC_FC': sumDisFc.toFixed(2) });
            grid.jqGrid("footerData", "set", { 'RCOV_DISC_BC': sumDisBc.toFixed(2) });


            // set risk SI and Premiums vlues,

            riskgrid.jqGrid("setCell", riskRowId, "TRA_TOT_PREM_FC", sumGrossPremFc.toFixed(2));
            riskgrid.jqGrid("setCell", riskRowId, "TRA_TOT_PREM_BC", sumGrossPremBc.toFixed(2));

            riskgrid.jqGrid("setCell", riskRowId, "TRA_SI_FC", riskSumSifc.toFixed(2));
            riskgrid.jqGrid("setCell", riskRowId, "TRA_SI_BC", riskSumSibc.toFixed(2));

            riskgrid.jqGrid("setCell", riskRowId, "TRA_LOAD_FC", sumLoadFc.toFixed(2));
            riskgrid.jqGrid("setCell", riskRowId, "TRA_LOAD_BC", sumLoadBc.toFixed(2));

            riskgrid.jqGrid("setCell", riskRowId, "TRA_DISC_FC", sumDisFc.toFixed(2));
            riskgrid.jqGrid("setCell", riskRowId, "TRA_DISC_BC", sumDisBc.toFixed(2));

            // Policy Level SI and premium Calculations 
            $scope.SumPolhAmounts();

        };
        //Policy Level SI and premium Calculations

        // calculate sum of Risk level amounts
        $scope.SumPolhAmounts = function () {

            //Declare variables
            var polGrossPremFc = 0;
            var polGrossPremBc = 0;

            var polNetPremFc = 0;
            var polNetPremBc = 0;

            var polLoadFc = 0;
            var polLoadBc = 0;

            var polDisFc = 0;
            var polDisBc = 0;

            var polSifc = 0;
            var polSibc = 0;

            var polSifc = 0;
            var polSibc = 0;

            var polSifc = 0;
            var polSibc = 0;
            //
            var polgrid = $scope.travel_grid;

            var polrowIds = polgrid.jqGrid('getDataIDs');


            // iterate through the rows and check if it exists each of them
            for (var i = 0, len = polrowIds.length; i < len; i++) {

                var currRow = polrowIds[i];

                // Sum risk level Amounts for Policy Level Amounts

                polSifc += parseFloat(polgrid.jqGrid('getCell', currRow, "TRA_SI_FC"));
                polSibc += parseFloat(polgrid.jqGrid('getCell', currRow, "TRA_SI_BC"));

                polGrossPremFc += parseFloat(polgrid.jqGrid('getCell', currRow, "TRA_TOT_PREM_FC"));
                polGrossPremBc += parseFloat(polgrid.jqGrid('getCell', currRow, "TRA_TOT_PREM_BC"));

                polLoadFc += parseFloat(polgrid.jqGrid('getCell', currRow, "TRA_LOAD_FC"));
                polLoadBc += parseFloat(polgrid.jqGrid('getCell', currRow, "TRA_LOAD_BC"));

                polDisFc += parseFloat(polgrid.jqGrid('getCell', currRow, "TRA_DISC_FC"));
                polDisBc += parseFloat(polgrid.jqGrid('getCell', currRow, "TRA_DISC_BC"));

            }

            $("#POLH_POL_SI_FC").val(polSifc);
            $("#POLH_POL_SI_BC").val(polSibc);

            $("#POLH_POL_PREM_FC").val(polGrossPremFc);
            $("#POLH_POL_PREM_BC").val(polGrossPremBc);
            //
            $("#POLH_POL_LOAD_FC").val(polLoadFc);
            $("#POLH_POL_LOAD_BC").val(polLoadBc);

            $("#POLH_POL_DISC_FC").val(polDisFc);
            $("#POLH_POL_DISC_BC").val(polDisBc);

        };



        /*
        Get default covers for the first time of loading the Risk Covers btn_add_motor_details
     */
        function getDefaultRiskCovers () {

            if ($('#POLH_SUB_CLASS_CODE').val() == "") {

                u.growl_warning("The Risk Code cannot be null, Please check and try again");

            }
            else {
                /*
                   obtain parameter for our request
               */
                var productRiskData = {

                    PRD_CODE: $("#POLH_SUB_CLASS_CODE").val(),
                    CUR_RATE: $("#POLH_CURRENCY_RATE").val(),
                }; //

                var grid = $scope.cover_grid;

                var rowIds = grid.jqGrid('getDataIDs');

                //declare array to contain the codes to varify
                var CodeArray = [];

                // iterate through the rows in the grid and add Covers to Array
                for (var i = 0, len = rowIds.length; i < len; i++) {
                    var currRow = rowIds[i];

                    //get value of the cell or column in an array
                    var coverCode = grid.jqGrid("getCell", currRow, "RCOV_CODE");

                    var RiskCode = grid.jqGrid("getCell", currRow, "RCOV_RISK_SYS_ID");

                    var riskCov = coverCode + RiskCode;

                    // alert(riskCov);
                    CodeArray.push(riskCov);
                }

                //send parameters and get Default covers from the database
                s.getRiskDefaulCovers(productRiskData, function (result) {
                    if (result && result.length && result.length > 0) {

                        for (var i in result) {

                            //alert(JSON.stringify(result));

                            result[i]["RCOV_NAME"] = result[i]["MS_UDW_COVERS"]["CVR_NAME"];
                            result[i]["RCOV_TYPE"] = result[i]["MS_UDW_COVERS"]["CVR_TYPE"];

                            result[i]["RCOV_RI_YN"] = result[i]["MS_UDW_COVERS"]["CVR_RI_APPLICABLE"];

                            result[i]["RCOV_USER_PREM"] = result[i]["MS_UDW_COVERS"]["CVR_USER_PREMIUM"];
                            result[i]["RCOV_PREM_REFUND"] = result[i]["MS_UDW_COVERS"]["RCOV_PREM_REFUND"];
                            result[i]["RCOV_RATE_CHANGE"] = result[i]["MS_UDW_COVERS"]["CVR_RATE_CHANGE"];
                            result[i]["RCOV_SI_CHANGE"] = result[i]["MS_UDW_COVERS"]["CVR_SI_CHANGE"];
                            result[i]["RCOV_COVER_LEVEL"] = result[i]["MS_UDW_COVERS"]["RCOV_COVER_LEVEL"];

                            result[i]["RCOV_RISK_SYS_ID"] = $("#TRA_SYS_ID").val();
                            result[i]["RCOV_RISK_NO"] = $("#TRA_RISK_NO").val();
                            //result[i]["RCOV_SI_FC"] = $("#RCOV_SI_FC").val();


                            var deftCoverCode = result[i].RCOV_CODE;
                            var newRiskCode = $("#TRA_SYS_ID").val();

                            var verifyRiskCover = deftCoverCode + newRiskCode; //alert(verifyRiskCover);

                            //add if Cover is not found in the Grid//

                            if ($.inArray(verifyRiskCover, CodeArray) < 0) {

                                //fill in default covers if not in the grid

                                $scope.cover_grid.addRowData(result[i].ID, result[i]);
                            }
                            else {

                                u.growl_warning("Cover exists for this Risk, you cannot add same Cover " + deftCoverCode);
                            }
                        }
                        //

                    }
                });
            }
        }


        //Get default Covers if not added
        $("#btn_get_DeftCovers").click(function () {

            getDefaultRiskCovers();

        });


        //Commission Calculations
        function calculateIntermediaryComm() {
            //grdIntermediaryComm $scope.intermCom_grid
            var commgrid = $scope.intermCom_grid;

            var commrowIds = commgrid.jqGrid('getDataIDs');

            var polPremFC = parseFloat($('#POLH_POL_PREM_FC').val() | 0);
            var polPremBC = parseFloat($('#POLH_POL_PREM_BC').val() | 0);
            // iterate through the rows 

            if (polPremFC == 0) {

            }
            else if (u.grid_empty($scope.intermCom_grid)) {

            }
            else {

                for (var i = 0, len = commrowIds.length; i < len; i++) {

                    var currRow = commrowIds[i];

                    // Sum risk level Amounts for Policy Level Amounts

                    commgrid.jqGrid('setCell', currRow, 'CMM_PREM_AMT_FC', polPremFC.toFixed(2));
                    commgrid.jqGrid('setCell', currRow, 'CMM_PREM_AMT_BC', polPremBC.toFixed(2));

                    //
                    comPerc = parseFloat(commgrid.jqGrid('getCell', currRow, 'CMM_COM_PERC') | 0);

                    var CommAmountFC = parseFloat(polPremFC * comPerc / 100);
                    var CommAmountBC = parseFloat(polPremBC * comPerc / 100);

                    //CommAmountFC CommAmountBC
                    commgrid.jqGrid('setCell', currRow, 'CMM_COM_AMT_FC', CommAmountFC.toFixed(2));
                    commgrid.jqGrid('setCell', currRow, 'CMM_COM_AMT_BC', CommAmountBC.toFixed(2));
                }

            }
        }


        //Policy Douments Modal
        $("#btnViewDocuments").on('click', function () {

            $("#PolicyDocsModal").modal();

        });

        //View Schedule

        $("#btnRunReports").click(function () {

            var e = document.getElementById("Viewpolicyreports");
            var polreports = e.options[e.selectedIndex].value;
            var poltxnst = $('#POLH_TXN_STATE').val();

            if (polreports == "") {
                u.growl_warning("Nothing selected, Please select to view report");
            }

            else if (polreports == "Debit") {

                if (poltxnst == "P" || poltxnst == "E") {

                    if (!u.field_empty("#POLH_SYS_ID")) {

                        $("#policyscheduleModal").modal();

                        $("#PolicyDocsModal").modal("hide");

                        $("#POLH_ID").val($("#POLH_SYS_ID").val());

                        $("#btnQuerypolicyreport").click(function (e) {

                            if (u.field_empty("#POLH_ID")) {
                                u.modal_warning("Policy No is not correct");
                            }
                            else {
                                console.log(policyData);
                                var policyData = u.parse_form("#policyreportForm");
                                window.open("/StaticReport/PolicyHeaderSchedule/" + policyData["POLH_ID"], "result", "width=900,height=1000,toolbar=0,menubar=no,status=no,resizable=yes,location=no,directories=no,scrollbars=yes");
                            }
                        });
                    }
                    else {
                        u.modal_warning("There is no Policy to view");
                    }

                }
                else {
                    u.modal_warning("Policy is not Approved");
                }

            }

            else if (polreports == "Schedule") {

                if (poltxnst == "P" || poltxnst == "E") {

                    if (!u.field_empty("#POLH_SYS_ID")) {

                        $("#policyscheduleModal").modal();

                        $("#PolicyDocsModal").modal("hide");

                        $("#POLH_ID").val($("#POLH_SYS_ID").val());

                        $("#btnQuerypolicyreport").click(function (e) {

                            if (u.field_empty("#POLH_ID")) {
                                u.modal_warning("Policy No is not correct");
                            }
                            else {
                                console.log(policyData);
                                var policyData = u.parse_form("#policyreportForm");
                                window.open("/PolicySchedules/PolicyTravelSchedule/" + policyData["POLH_ID"], "result", "width=900,height=1000,toolbar=0,menubar=no,status=no,resizable=yes,location=no,directories=no,scrollbars=yes");
                            }
                        });
                    }
                    else {
                        u.modal_warning("There is no Policy to view");
                    }

                }
                else {
                    u.modal_warning("Policy is not Approved");
                }

            }

        });


        /*-----------------------------
         * Age calculation
         *---------------------------*/

        $(window).load(function () {
            handleDOBChanged();
        });

        //listener on date of birth field
        function handleDOBChanged() {
            $('#TRA_DOB').on('change', function () {
                if (isDate($('#TRA_DOB').val())) {
                    var age = calculateAge(parseDate($('#TRA_DOB').val()), new Date());
                    $('#TRA_AGE').val(age);

                    if (age < 18) {
                        u.growl_warning("Age less that I8 years");
                        $('#TRA_AGE').val('');
                    }

                }

                else {
                    u.growl_warning("Not a valid date");
                    $('#TRA_AGE').val('');
                }
            });
        }

        //convert the date string in the format of dd/mm/yyyy into a JS date object
        function parseDate(dateStr) {
            var dateParts = dateStr.split("/");
            return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
        }

        //is valid date format
        function calculateAge(dateOfBirth, dateToCalculate) {
            var calculateYear = dateToCalculate.getFullYear();
            var calculateMonth = dateToCalculate.getMonth();
            var calculateDay = dateToCalculate.getDate();

            var birthYear = dateOfBirth.getFullYear();
            var birthMonth = dateOfBirth.getMonth();
            var birthDay = dateOfBirth.getDate();

            var age = calculateYear - birthYear;
            var ageMonth = calculateMonth - birthMonth;
            var ageDay = calculateDay - birthDay;

            if (ageMonth < 0 || (ageMonth == 0 && ageDay < 0)) {
                age = parseInt(age) - 1;
            }
            return age;
        }

        function isDate(txtDate) {
            var currVal = txtDate;
            if (currVal == '')
                return true;

            //Declare Regex
            var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
            var dtArray = currVal.match(rxDatePattern); // is format OK?

            if (dtArray == null)
                return false;

            //Checks for dd/mm/yyyy format.
            var dtDay = dtArray[1];
            var dtMonth = dtArray[3];
            var dtYear = dtArray[5];

            if (dtMonth < 1 || dtMonth > 12)
                return false;
            else if (dtDay < 1 || dtDay > 31)
                return false;
            else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
                return false;
            else if (dtMonth == 2) {
                var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
                if (dtDay > 29 || (dtDay == 29 && !isleap))
                    return false;
            }

            return true;
        }


        /*-----------------------------
         * Travel header risk
         *---------------------------*/
        document.getElementById("POLH_SUB_CLASS_CODE").addEventListener("focusout", funcgetrisk);

        function funcgetrisk() {
            var trarisk = $("#POLH_SUB_CLASS_CODE").val();
            $("#TRAH_RISK_CODE").val(trarisk);
        }

        document.getElementById("PDT_NAME").addEventListener("focusout", funcgetriskname);

        function funcgetriskname() {
            var trariskname = $("#PDT_NAME").val();
            $("#TRAH_RISK_NAME").val(trariskname);
        }


    });

})(window.$, window.service, window.utility, {})