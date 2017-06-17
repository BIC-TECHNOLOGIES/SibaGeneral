(function ($, s, u, $scope) {
    $(function () {

        // CAR Interest
          $scope.carinterest_grid = u.default_grid("#gridCARInterest", "#gridCARInterestPager", "CAR Interest",
            ['Risk type', 'Risk Name', ' Description', 'Contract Price FC', 'Contract Price BC', 'Items Supplied FC', 'Items Supplied BC', 'Debris FC', 'Debris BC', 'Sum Insured FC', 'Sum Insured BC', 'Premium FC', 'Premium BC',
                'Sys ID', 'Status', 'Created by', 'Created date', 'Modified by', 'Modified date', 'Eng Sys ID', 'Polh Sys ID'],
            [
                    { name: 'CAR_RISK_TYPE', index: 'CAR_RISK_TYPE', width: 300 },
                    { name: 'CAR_RISK_NAME', index: 'CAR_RISK_NAME', width: 300 },
                    { name: 'CAR_DESCRIPTION', index: 'CAR_DESCRIPTION', width: 500 },
                    { name: 'CAR_CON_PRICE_FC', index: 'CAR_CON_PRICE_FC', width: 200 },
                    { name: 'CAR_CON_PRICE_BC', index: 'CAR_CON_PRICE_BC', width: 200 },
                    { name: 'CAR_ITEMS_SUPPLIED_FC', index: 'CAR_ITEMS_SUPPLIED_FC', width: 300 },
                    { name: 'CAR_ITEMS_SUPPLIED_BC', index: 'CAR_ITEMS_SUPPLIED_BC', width: 300 },
                    { name: 'CAR_DEBRIS_FC', index: 'CAR_DEBRIS_FC', width: 300 },
                    { name: 'CAR_DEBRIS_BC', index: 'CAR_DEBRIS_BC', width: 300 },
                    { name: 'CAR_SI_FC', index: 'CAR_SI_FC', width: 300 },
                    { name: 'CAR_SI_BC', index: 'CAR_SI_BC', width: 300 },
                    { name: 'CAR_TOT_PREM_FC', index: 'CAR_TOT_PREM_FC', width: 300 },
                    { name: 'CAR_TOT_PREM_BC', index: 'CAR_TOT_PREM_BC', width: 300 },
                    { name: 'CAR_SYS_ID', index: 'CAR_SYS_ID', width: 200 },
                    { name: 'CAR_STATUS', index: 'CAR_STATUS', width: 200 },
                    { name: 'CAR_CRTE_BY', index: 'CAR_CRTE_BY', width: 300 },
                    { name: 'CAR_CRTE_DATE', index: 'CAR_CRTE_DATE', width: 300 },
                    { name: 'CAR_MOD_BY', index: 'CAR_MOD_BY', width: 300 },
                    { name: 'CAR_MOD_DATE', index: 'CAR_MOD_DATE', width: 300 },
                    { name: 'CAR_ENG_SYS_ID', index: 'CAR_ENG_SYS_ID', width: 300 },
                    { name: 'CAR_POLH_SYS_ID', index: 'CAR_POLH_SYS_ID', width: 300 },
            ],
                   //Retrive Grid data into form input fields on row click..
           function (sel_id) {
               var grid = $scope.carinterest_grid;
               var sel_id = grid.jqGrid('getGridParam', 'selrow');
               $("form input[name='CAR_SYS_ID']").data("update", true);
               u.fill_form({
                   CAR_SYS_ID: grid.jqGrid('getCell', sel_id, 'CAR_SYS_ID'),
                   CAR_RISK_TYPE: grid.jqGrid('getCell', sel_id, 'CAR_RISK_TYPE'),
                   CAR_RISK_NAME: grid.jqGrid('getCell', sel_id, 'CAR_RISK_NAME'),
                   CAR_DESCRIPTION: grid.jqGrid('getCell', sel_id, 'CAR_DESCRIPTION'),                
                   CAR_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'CAR_ENG_SYS_ID'),
                   
               }, "#carinterestForm");
           }),


        // CAR CPM
         $scope.carcpm_grid = u.default_grid("#gridCARCPMInterest", "#gridCARCPMInterestPager", "Contractor Plant Machinery",
           ['Sys ID', 'Risk type', 'Risk Name', ' Description', 'Sum Insured FC', 'Sum Insured BC', 'Premium FC', 'Premium BC',
               'Status', 'Created by', 'Created date', 'Eng Loc ID', 'Polh Sys ID'],
           [
                    { name: 'CPM_SYS_ID', index: 'CPM_SYS_ID', width: 100 },
                    { name: 'CPM_RISK_TYPE', index: 'CPM_RISK_TYPE', width: 300 },
                    { name: 'CPM_RISK_NAME', index: 'CPM_RISK_NAME', width: 300 },
                    { name: 'CPM_DESCRIPTION', index: 'CPM_DESCRIPTION', width: 300 },
                    { name: 'CPM_CAR_SI_FC', index: 'CPM_CAR_SI_FC', width: 150 },
                    { name: 'CPM_CAR_SI_BC', index: 'CPM_CAR_SI_BC', width: 150 },
                    { name: 'CPM_CAR_TOT_PREM_FC', index: 'CPM_CAR_TOT_PREM_FC', width: 150 },
                    { name: 'CPM_CAR_TOT_PREM_BC', index: 'CPM_CAR_TOT_PREM_BC', width: 150 },
                    { name: 'CPM_STATUS', index: 'CPM_STATUS', width: 100 },
                    { name: 'CPM_CRTE_BY', index: 'CPM_CRTE_BY', width: 150 },
                    { name: 'CPM_CRTE_DATE', index: 'CPM_CRTE_DATE', width: 150 },                  
                    { name: 'CPM_ENG_SYS_ID', index: 'CPM_ENG_SYS_ID', width: 200 },
                    { name: 'CPM_POLH_SYS_ID', index: 'CPM_POLH_SYS_ID', width: 200 },
           ],
                //Retrive Grid data into form input fields on row click..
         function (sel_id) {
             var grid = $scope.carcpm_grid;
             var sel_id = grid.jqGrid('getGridParam', 'selrow');
             $("form input[name='CPM_SYS_ID']").data("update", true);
             u.fill_form({
                 CPM_SYS_ID: grid.jqGrid('getCell', sel_id, 'CPM_SYS_ID'),
                 CPM_RISK_TYPE: grid.jqGrid('getCell', sel_id, 'CPM_RISK_TYPE'),
                 CPM_RISK_NAME: grid.jqGrid('getCell', sel_id, 'CPM_RISK_NAME'),
                 CPM_DESCRIPTION: grid.jqGrid('getCell', sel_id, 'CPM_DESCRIPTION'),
                 CPM_STATUS: grid.jqGrid('getCell', sel_id, 'CPM_STATUS'),
                 CPM_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'CPM_ENG_SYS_ID'),
                 CPM_POLH_SYS_ID: grid.jqGrid('getCell', sel_id, 'CPM_POLH_SYS_ID'),

             }, "#carcpmForm");
         }),


        // CAR Contractor
         $scope.carcon_grid = u.default_grid("#gridCARCONInterest", "#gridCARCONInterestPager", "Contractor Plant Machinery",
           ['Sys ID', 'Risk Name', ' Description',
            'Status', 'Created by', 'Created date', 'Eng Loc ID', 'Polh Sys ID'],
           [
                    { name: 'CONVAL_SYS_ID', index: 'CONVAL_SYS_ID', width: 100 },
                    { name: 'CONVAL_NAME', index: 'CONVAL_NAME', width: 150 },
                    { name: 'CONVAL_DESC', index: 'CONVAL_DESC', width: 150 },
                    { name: 'CONVAL_STATUS', index: 'CONVAL_STATUS', width: 100 },
                    { name: 'CONVAL_CRTE_BY', index: 'CONVAL_CRTE_BY', width: 150 },
                    { name: 'CONVAL_CRTE_DATE', index: 'CONVAL_CRTE_DATE', width: 150 },
                    { name: 'CONVAL_ENG_SYS_ID', index: 'CONVAL_ENG_SYS_ID', width: 200 },
                    { name: 'CONVAL_POLH_SYS_ID', index: 'CONVAL_POLH_SYS_ID', width: 200 },
           ],
                //Retrive Grid data into form input fields on row click..
         function (sel_id) {
             var grid = $scope.carcon_grid;
             var sel_id = grid.jqGrid('getGridParam', 'selrow');
             $("form input[name='CONVAL_SYS_ID']").data("update", true);
             u.fill_form({
                 CONVAL_SYS_ID: grid.jqGrid('getCell', sel_id, 'CONVAL_SYS_ID'),
                 CONVAL_NAME: grid.jqGrid('getCell', sel_id, 'CONVAL_NAME'),
                 CONVAL_DESC: grid.jqGrid('getCell', sel_id, 'CONVAL_DESC'),
             }, "#carconForm");
         }),


        // CAR Third Party Loss Grid
       $scope.cartpl_grid = u.default_grid("#gridCARTPL", "#gridCARTPLPager", "CAR Third Party Loss",
          [
            'Sys id', 'TPL Code', 'TPL Name', 'TPL Type', 'Sum Insured FC', 'Sum Insured BC', 'Rate',
            'Gross Premium FC', 'Gross Premium BC', 'Net Premium FC', 'Net Premium BC',
            'Discount Applicable',
            'Discount FC',
            'Discount BC', 'Load Apllicable', 'Load FC', 'Load BC', 'Risk id',
            'Risk no', 'Pol doc no', 'End. no', 'RI SI YN', 'RI Premium YN',
            'Rate Change', 'SI Change', 'Cover Level', 'Premium Refund', 'RI App', 'User Premium',
            'Txn State', 'Create By', 'Create Date', 'Modified By', 'Modified Date',
            'Record Status'
          ],
          [
            { name: 'CARTPL_SYS_ID', index: 'CARTPL_SYS_ID', hidden: false, width: 150, sorttype: "int" },
            { name: 'CARTPL_CODE', index: 'CARTPL_CODE', width: 150 },
            { name: 'CARTPL_NAME', index: 'CARTPL_NAME', width: 150 },
            { name: 'CARTPL_TYPE', index: 'CARTPL_TYPE', width: 150 },
            { name: 'CARTPL_SI_FC', index: 'CARTPL_SI_FC', width: 150 },
            { name: 'CARTPL_SI_BC', index: 'CARTPL_SI_BC', width: 150 },
            { name: 'CARTPL_RATE', index: 'CARTPL_RATE', width: 150 },
            { name: 'CARTPL_GROSS_PREM_FC', index: 'CARTPL_GROSS_PREM_FC', width: 150 },
            { name: 'CARTPL_GROSS_PREM_BC', index: 'CARTPL_GROSS_PREM_BC', width: 150 },
            { name: 'CARTPL_NET_PREM_FC', index: 'CARTPL_NET_PREM_FC', width: 150 },
            { name: 'CARTPL_NET_PREM_BC', index: 'CARTPL_NET_PREM_BC', width: 150 },
            { name: 'CARTPL_DISC_YN', index: 'CARTPL_DISC_YN', width: 150 },
            { name: 'CARTPL_DISC_FC', index: 'CARTPL_DISC_FC', width: 150 },
            { name: 'CARTPL_DISC_BC', index: 'CARTPL_DISC_BC', width: 150 },
            { name: 'CARTPL_LOAD_YN', index: 'CARTPL_LOAD_YN', width: 150 },
            { name: 'CARTPL_LOAD_FC', index: 'CARTPL_LOAD_FC', width: 150 },
            { name: 'CARTPL_LOAD_BC', index: 'CARTPL_LOAD_BC', width: 150 },

            { name: 'CARTPL_RISK_SYS_ID', index: 'CARTPL_RISK_SYS_ID', hidden: false, width: 150, sorttype: "int" },
            { name: 'CARTPL_RISK_NO', index: 'CARTPL_RISK_NO', hidden: false, width: 150 },
            { name: 'CARTPL_POLH_DOC_NO', index: 'CARTPL_POLH_DOC_NO', width: 150 },
            { name: 'CARTPL_END_NO', index: 'CARTPL_END_NO', width: 150 },
            { name: 'CARTPL_RI_SI_YN', index: 'CARTPL_RI_SI_YN', hidden: false, width: 150 },
            { name: 'CARTPL_RI_PREM_YN', index: 'CARTPL_RI_PREM_YN', hidden: false, width: 150 },
            //
            { name: 'CARTPL_RATE_CHANGE', index: 'CARTPL_RATE_CHANGE', width: 150 },
            { name: 'CARTPL_SI_CHANGE', index: 'CARTPL_SI_CHANGE', width: 150 },
            { name: 'CARTPL_COVER_LEVEL', index: 'CARTPL_COVER_LEVEL', width: 150 },
            { name: 'CARTPL_PREM_REFUND', index: 'CARTPL_PREM_REFUND', width: 150 },
            { name: 'CARTPL_RI_YN', index: 'CARTPL_RI_YN', width: 150 },
            { name: 'CARTPL_USER_PREM', index: 'CARTPL_USER_PREM', width: 150 },
            //
            { name: 'CARTPL_TXN_STATE', index: 'CARTPL_TXN_STATE', width: 150 },
            { name: 'CARTPL_CRTE_BY', index: 'CARTPL_CRTE_BY', width: 150 },
            { name: 'CARTPL_CRTE_DATE', index: 'CARTPL_CRTE_DATE', width: 150 },
            { name: 'CARTPL_MOD_BY', index: 'CARTPL_MOD_BY', width: 150 },
            { name: 'CARTPL_MOD_DATE', index: 'CARTPL_MOD_DATE', width: 150 },
            { name: 'CARTPL_STATUS', index: 'CARTPL_STATUS', width: 150 },
          ],
                    //Retrive Grid data into form input fields on row click..
         function (sel_id) {
             var grid = $scope.eartpl_grid;
             var sel_id = grid.jqGrid('getGridParam', 'selrow');
             $("form input[name='CARTPL_CODE']").data("update", true);
             u.fill_form({
                 CARTPL_CODE: grid.jqGrid('getCell', sel_id, 'CARTPL_CODE'),
                 CARTPL_NAME: grid.jqGrid('getCell', sel_id, 'CARTPL_NAME'),
                 CARTPL_TYPE: grid.jqGrid('getCell', sel_id, 'CARTPL_TYPE'),
                 CARTPL_SI_FC: grid.jqGrid('getCell', sel_id, 'CARTPL_SI_FC'),
                 CARTPL_SI_BC: grid.jqGrid('getCell', sel_id, 'CARTPL_SI_BC'),
                 CARTPL_RATE: grid.jqGrid('getCell', sel_id, 'CARTPL_RATE'),
                 CARTPL_GROSS_PREM_FC: grid.jqGrid('getCell', sel_id, 'CARTPL_GROSS_PREM_FC'),
                 CARTPL_GROSS_PREM_BC: grid.jqGrid('getCell', sel_id, 'CARTPL_GROSS_PREM_BC'),
                 CARTPL_NET_PREM_FC: grid.jqGrid('getCell', sel_id, 'CARTPL_NET_PREM_FC'),
                 CARTPL_NET_PREM_BC: grid.jqGrid('getCell', sel_id, 'CARTPL_NET_PREM_BC'),
                 CARTPL_DISC_YN: grid.jqGrid('getCell', sel_id, 'CARTPL_DISC_YN'),
                 CARTPL_DISC_FC: grid.jqGrid('getCell', sel_id, 'CARTPL_DISC_FC'),
                 CARTPL_DISC_BC: grid.jqGrid('getCell', sel_id, 'CARTPL_DISC_BC'),
                 CARTPL_LOAD_YN: grid.jqGrid('getCell', sel_id, 'CARTPL_LOAD_YN'),
                 CARTPL_LOAD_FC: grid.jqGrid('getCell', sel_id, 'CARTPL_LOAD_FC'),
                 CARTPL_LOAD_BC: grid.jqGrid('getCell', sel_id, 'CARTPL_LOAD_BC'),
                 CARTPL_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'CARTPL_ENG_SYS_ID'),
                 CARTPL_RISK_NO: grid.jqGrid('getCell', sel_id, 'CARTPL_RISK_NO'),
                 CARTPL_POLH_DOC_NO: grid.jqGrid('getCell', sel_id, 'CARTPL_POLH_DOC_NO'),
                 CARTPL_END_NO: grid.jqGrid('getCell', sel_id, 'CARTPL_END_NO'),
                 CARTPL_RI_SI_YN: grid.jqGrid('getCell', sel_id, 'CARTPL_RI_SI_YN'),
                 CARTPL_RI_PREM_YN: grid.jqGrid('getCell', sel_id, 'CARTPL_RI_PREM_YN'),
                 CARTPL_RATE_CHANGE: grid.jqGrid('getCell', sel_id, 'CARTPL_RATE_CHANGE'),
                 CARTPL_SI_CHANGE: grid.jqGrid('getCell', sel_id, 'CARTPL_SI_CHANGE'),
                 CARTPL_COVER_LEVEL: grid.jqGrid('getCell', sel_id, 'CARTPL_COVER_LEVEL'),
                 CARTPL_PREM_REFUND: grid.jqGrid('getCell', sel_id, 'CARTPL_PREM_REFUND'),
                 CARTPL_RI_YN: grid.jqGrid('getCell', sel_id, 'CARTPL_RI_YN'),
                 CARTPL_USER_PREM: grid.jqGrid('getCell', sel_id, 'CARTPL_USER_PREM'),
                 CARTPL_TXN_STATE: grid.jqGrid('getCell', sel_id, 'CARTPL_TXN_STATE'),
                 CARTPL_SYS_ID: grid.jqGrid('getCell', sel_id, 'CARTPL_SYS_ID'),

             }, "#cartplForm");
         }),


        // CAR Loss of Profit Grid
      $scope.carlossop_grid = u.default_grid("#gridCARLOSSOP", "#gridCARLOSSOPPager", "CAR Loss Of Profit",
         [
            'Sys id', 'Loss of Profit Code', 'Loss of Profit Name', 'Cover Type', 'Sum Insured FC', 'Sum Insured BC', 'Rate',
            'Gross Premium FC', 'Gross Premium BC', 'Net Premium FC', 'Net Premium BC',
            'Discount Applicable',
            'Discount FC',
            'Discount BC', 'Load Apllicable', 'Load FC', 'Load BC', 'Risk id',
            'Risk no', 'Pol doc no', 'End. no', 'RI SI YN', 'RI Premium YN',
            'Rate Change', 'SI Change', 'Cover Level', 'Premium Refund', 'RI App', 'User Premium',
            'Txn State', 'Create By', 'Create Date', 'Modified By', 'Modified Date',
            'Record Status'
         ],
         [
            { name: 'LOSSOP_SYS_ID', index: 'LOSSOP_SYS_ID', hidden: false, width: 150, sorttype: "int" },
            { name: 'LOSSOP_CODE', index: 'LOSSOP_CODE', width: 150 },
            { name: 'LOSSOP_NAME', index: 'LOSSOP_NAME', width: 150 },
            { name: 'LOSSOP_TYPE', index: 'LOSSOP_TYPE', width: 150 },
            { name: 'LOSSOP_SI_FC', index: 'LOSSOP_SI_FC', width: 150 },
            { name: 'LOSSOP_SI_BC', index: 'LOSSOP_SI_BC', width: 150 },
            { name: 'LOSSOP_RATE', index: 'LOSSOP_RATE', width: 150 },
            { name: 'LOSSOP_GROSS_PREM_FC', index: 'LOSSOP_GROSS_PREM_FC', width: 150 },
            { name: 'LOSSOP_GROSS_PREM_BC', index: 'LOSSOP_GROSS_PREM_BC', width: 150 },
            { name: 'LOSSOP_NET_PREM_FC', index: 'LOSSOP_NET_PREM_FC', width: 150 },
            { name: 'LOSSOP_NET_PREM_BC', index: 'LOSSOP_NET_PREM_BC', width: 150 },

            { name: 'LOSSOP_DISC_YN', index: 'LOSSOP_DISC_YN', width: 150 },
            { name: 'LOSSOP_DISC_FC', index: 'LOSSOP_DISC_FC', width: 150 },
            { name: 'LOSSOP_DISC_BC', index: 'LOSSOP_DISC_BC', width: 150 },

            { name: 'LOSSOP_LOAD_YN', index: 'LOSSOP_LOAD_YN', width: 150 },
            { name: 'LOSSOP_LOAD_FC', index: 'LOSSOP_LOAD_FC', width: 150 },
            { name: 'LOSSOP_LOAD_BC', index: 'LOSSOP_LOAD_BC', width: 150 },

            { name: 'LOSSOP_ENG_SYS_ID', index: 'LOSSOP_ENG_SYS_ID', hidden: false, width: 150, sorttype: "int" },
            { name: 'LOSSOP_RISK_NO', index: 'LOSSOP_RISK_NO', hidden: false, width: 150 },
            { name: 'LOSSOP_POLH_DOC_NO', index: 'LOSSOP_POLH_DOC_NO', width: 150 },
            { name: 'LOSSOP_END_NO', index: 'LOSSOP_END_NO', width: 150 },
            { name: 'LOSSOP_RI_SI_YN', index: 'LOSSOP_RI_SI_YN', hidden: false, width: 150 },
            { name: 'LOSSO_RI_PREM_YN', index: 'LOSSO_RI_PREM_YN', hidden: false, width: 150 },
            //
            { name: 'LOSSOP_RATE_CHANGE', index: 'LOSSOP_RATE_CHANGE', width: 150 },
            { name: 'LOSSOP_SI_CHANGE', index: 'LOSSOP_SI_CHANGE', width: 150 },
            { name: 'LOSSOP_COVER_LEVEL', index: 'LOSSOP_COVER_LEVEL', width: 150 },
            { name: 'LOSSOP_PREM_REFUND', index: 'LOSSOP_PREM_REFUND', width: 150 },
            { name: 'LOSSOP_RI_YN', index: 'LOSSOP_RI_YN', width: 150 },
            { name: 'LOSSOP_USER_PREM', index: 'LOSSOP_USER_PREM', width: 150 },
            //
            { name: 'LOSSOP_TXN_STATE', index: 'LOSSOP_TXN_STATE', width: 150 },
            { name: 'LOSSOP_CRTE_BY', index: 'LOSSOP_CRTE_BY', width: 150 },
            { name: 'LOSSOP_CRTE_DATE', index: 'LOSSOP_CRTE_DATE', width: 150 },
            { name: 'LOSSOP_MOD_BY', index: 'LOSSOP_MOD_BY', width: 150 },
            { name: 'LOSSOP_MOD_DATE', index: 'LOSSOP_MOD_DATE', width: 150 },
            { name: 'LOSSOP_STATUS', index: 'LOSSOP_STATUS', width: 150 },
         ],
                        //Retrive Grid data into form input fields on row click..
         function (sel_id) {
             var grid = $scope.carlossop_grid;
             var sel_id = grid.jqGrid('getGridParam', 'selrow');
             $("form input[name='CARTPL_CODE']").data("update", true);
             u.fill_form({
                 LOSSOP_CODE: grid.jqGrid('getCell', sel_id, 'LOSSOP_CODE'),
                 LOSSOP_NAME: grid.jqGrid('getCell', sel_id, 'LOSSOP_NAME'),
                 LOSSOP_TYPE: grid.jqGrid('getCell', sel_id, 'LOSSOP_TYPE'),
                 LOSSOP_SI_FC: grid.jqGrid('getCell', sel_id, 'LOSSOP_SI_FC'),
                 LOSSOP_SI_BC: grid.jqGrid('getCell', sel_id, 'LOSSOP_SI_BC'),
                 LOSSOP_RATE: grid.jqGrid('getCell', sel_id, 'LOSSOP_RATE'),
                 LOSSOP_GROSS_PREM_FC: grid.jqGrid('getCell', sel_id, 'LOSSOP_GROSS_PREM_FC'),
                 LOSSOP_GROSS_PREM_BC: grid.jqGrid('getCell', sel_id, 'LOSSOP_GROSS_PREM_BC'),
                 LOSSOP_NET_PREM_FC: grid.jqGrid('getCell', sel_id, 'LOSSOP_NET_PREM_FC'),
                 LOSSOP_NET_PREM_BC: grid.jqGrid('getCell', sel_id, 'LOSSOP_NET_PREM_BC'),
                 LOSSOP_DISC_YN: grid.jqGrid('getCell', sel_id, 'LOSSOP_DISC_YN'),
                 LOSSOP_DISC_FC: grid.jqGrid('getCell', sel_id, 'LOSSOP_DISC_FC'),
                 LOSSOP_DISC_BC: grid.jqGrid('getCell', sel_id, 'LOSSOP_DISC_BC'),
                 LOSSOP_LOAD_YN: grid.jqGrid('getCell', sel_id, 'LOSSOP_LOAD_YN'),
                 LOSSOP_LOAD_FC: grid.jqGrid('getCell', sel_id, 'LOSSOP_LOAD_FC'),
                 LOSSOP_LOAD_BC: grid.jqGrid('getCell', sel_id, 'LOSSOP_LOAD_BC'),
                 LOSSOP_ENG_SYS_ID: grid.jqGrid('getCell', sel_id, 'LOSSOP_ENG_SYS_ID'),
                 LOSSOP_RISK_NO: grid.jqGrid('getCell', sel_id, 'LOSSOP_RISK_NO'),
                 LOSSOP_POLH_DOC_NO: grid.jqGrid('getCell', sel_id, 'LOSSOP_POLH_DOC_NO'),
                 LOSSOP_END_NO: grid.jqGrid('getCell', sel_id, 'LOSSOP_END_NO'),
                 LOSSOP_RI_SI_YN: grid.jqGrid('getCell', sel_id, 'LOSSOP_RI_SI_YN'),
                 LOSSO_RI_PREM_YN: grid.jqGrid('getCell', sel_id, 'LOSSO_RI_PREM_YN'),
                 LOSSOP_RATE_CHANGE: grid.jqGrid('getCell', sel_id, 'LOSSOP_RATE_CHANGE'),
                 LOSSOP_SI_CHANGE: grid.jqGrid('getCell', sel_id, 'LOSSOP_SI_CHANGE'),
                 LOSSOP_COVER_LEVEL: grid.jqGrid('getCell', sel_id, 'LOSSOP_COVER_LEVEL'),
                 LOSSOP_PREM_REFUND: grid.jqGrid('getCell', sel_id, 'LOSSOP_PREM_REFUND'),
                 LOSSOP_RI_YN: grid.jqGrid('getCell', sel_id, 'LOSSOP_RI_YN'),
                 LOSSOP_USER_PREM: grid.jqGrid('getCell', sel_id, 'LOSSOP_USER_PREM'),
                 LOSSOP_TXN_STATE: grid.jqGrid('getCell', sel_id, 'LOSSOP_TXN_STATE'),
                 LOSSOP_SYS_ID: grid.jqGrid('getCell', sel_id, 'LOSSOP_SYS_ID'),

             }, "#cartplForm");
         }),


        // Cover Grid
        $scope.cover_grid = u.default_grid("#gridAppCovers", "#gridAppCoversPager", "Cover",
            ['Cover Code', 'Cover Name',
                'Cover Type', 'Sum Insured FC', 'Sum Insured BC', 'Rate',
                    'Gross Premium FC', 'Gross Premium BC', "Annual Premium FC", "Annual Premium BC", 'Net Premium FC', 'Net Premium BC',
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
                { name: "RCOV_ANNL_PREM_FC", index: "RCOV_ANNL_PREM_FC", width: 150 },
                { name: "RCOV_ANNL_PREM_BC", index: "RCOV_ANNL_PREM_BC", width: 150 },
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
                { name: 'CVR_USER_PREMIUM', index: 'CVR_USER_PREMIUM', width: 150 },
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
            function (selId) {
                var grid = $scope.cover_grid;
                var selId = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='RCOV_SYS_ID']").data("update", true);
                u.fill_form({
                    RCOV_SYS_ID: grid.jqGrid("getCell", selId, "RCOV_SYS_ID"),
                    RCOV_RISK_SYS_ID: grid.jqGrid("getCell", selId, "RCOV_RISK_SYS_ID"),
                    RCOV_RISK_NO: grid.jqGrid("getCell", selId, "RCOV_RISK_NO"),
                    RCOV_POLH_DOC_NO: grid.jqGrid("getCell", selId, "RCOV_POLH_DOC_NO"),
                    RPCOV_END_NO: grid.jqGrid("getCell", selId, "RPCOV_END_NO"),
                    RCOV_CODE: grid.jqGrid("getCell", selId, "RCOV_CODE"),
                    RCOV_NAME: grid.jqGrid("getCell", selId, "RCOV_NAME"),
                    RCOV_SI_FC: grid.jqGrid("getCell", selId, "RCOV_SI_FC"),

                    RCOV_SI_BC: grid.jqGrid("getCell", selId, "RCOV_SI_BC"),
                    RCOV_RATE: grid.jqGrid("getCell", selId, "RCOV_RATE"),
                    RCOV_GROSS_PREM_FC: grid.jqGrid("getCell", selId, "RCOV_GROSS_PREM_FC"),
                    RCOV_GROSS_PREM_BC: grid.jqGrid("getCell", selId, "RCOV_GROSS_PREM_BC"),
                    RCOV_NET_PREM_FC: grid.jqGrid("getCell", selId, "RCOV_NET_PREM_FC"),
                    RCOV_NET_PREM_BC: grid.jqGrid("getCell", selId, "RCOV_NET_PREM_BC"),
                    RCOV_RI_SI_YN: grid.jqGrid("getCell", selId, "RCOV_RI_SI_YN"),

                    RCOV_RI_PREM_YN: grid.jqGrid("getCell", selId, "RCOV_RI_PREM_YN"),
                    RCOV_TYPE: grid.jqGrid("getCell", selId, "RCOV_TYPE"),
                    RCOV_DISC_YN: grid.jqGrid("getCell", selId, "RCOV_DISC_YN"),
                    RCOV_DISC_FC: grid.jqGrid("getCell", selId, "RCOV_DISC_FC"),
                    RCOV_DISC_BC: grid.jqGrid("getCell", selId, "RCOV_DISC_BC"),
                    RCOV_LOAD_YN: grid.jqGrid("getCell", selId, "RCOV_LOAD_YN"),
                    RCOV_LOAD_FC: grid.jqGrid("getCell", selId, "RCOV_LOAD_FC"),

                    RCOV_SI_CHANGE: grid.jqGrid("getCell", selId, "RCOV_SI_CHANGE"),
                    RCOV_RATE_CHANGE: grid.jqGrid("getCell", selId, "RCOV_RATE_CHANGE"),

                    RCOV_LOAD_BC: grid.jqGrid("getCell", selId, "RCOV_LOAD_BC"),
                    RCOV_TXN_STATE: grid.jqGrid("getCell", selId, "RCOV_TXN_STATE"),
                    RCOV_CRTE_BY: grid.jqGrid("getCell", selId, "RCOV_CRTE_BY"),
                    RCOV_CRTE_DATE: grid.jqGrid("getCell", selId, "RCOV_CRTE_DATE"),
                    RCOV_MOD_BY: grid.jqGrid("getCell", selId, "RCOV_MOD_BY"),
                    RCOV_MOD_DATE: grid.jqGrid("getCell", selId, "RCOV_MOD_DATE"),
                    RCOV_STATUS: grid.jqGrid("getCell", selId, "RCOV_STATUS"),
                    RCOV_ANNL_PREM_FC: grid.jqGrid("getCell", selId, "RCOV_ANNL_PREM_FC"),
                    RCOV_ANNL_PREM_BC: grid.jqGrid("getCell", selId, "RCOV_ANNL_PREM_BC")
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
                { name: 'ENG_FEE_CODE', index: 'ENG_FEE_CODE', width: 150 },
                { name: 'ENG_FEE_NAME', index: 'ENG_FEE_NAME', width: 200 },
                { name: 'ENG_FEE_FC_AMOUNT', index: 'ENG_FEE_FC_AMOUNT', width: 150 },
                { name: 'ENG_FEE_BC_AMOUNT', index: 'ENG_FEE_BC_AMOUNT', width: 150 },
                { name: 'ENG_FEE_POL_SYS_ID', index: 'ENG_FEE_POL_SYS_ID', width: 150 },
                { name: 'ENG_FEE_RK_SYS_ID', index: 'ENG_FEE_RK_SYS_ID', width: 150 },
                { name: 'ENG_FEE_RK_NO', index: 'ENG_FEE_RK_NO', width: 150 },
                { name: 'ENG_FEE_RK_CODE', index: 'ENG_FEE_RK_CODE', width: 150 },
                { name: 'ENG_FEE_END_NO', index: 'ENG_FEE_END_NO', width: 150 },
                { name: 'ENG_FEE_STATUS', index: 'ENG_FEE_STATUS', width: 150 },
                { name: 'ENG_FEE_SYS_ID', index: 'ENG_FEE_SYS_ID', width: 150 },
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


        // Risk Premium Summary
        $scope.RiskPremium_grid = u.default_grid("#gridRiskPremSummary", "#gridRiskPremSummaryPager", "Risk Premium Summary",
            ["Code", "Description", "FC_Amount", "BC_Amount"],
            [
                { name: "CODE", index: "DESCRIPTION", width: 150 },
                { name: "DESCRIPTION", index: "DESCRIPTION", width: 350 },
                { name: "FC_AMOUNT", index: "FC_AMOUNT", width: 150 },
                { name: "BC_AMOUNT", index: "BC_AMOUNT", width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {

            }),


        // Reinsurance Share Summary
        $scope.coinsurance_grid = u.default_grid("#gridTreatyShare", "#gridTreatySharePager", "Reinsurance Share",
            ["RI Company", "Share %", "Sum Insured Share", "Premium Share"],
            [
                { name: "TTS_RI_COMP", index: "TTS_RI_COMP", width: 150 },
                { name: "TTS_PERC", index: "TTS_PERC", width: 150 },
                { name: "TTS_SI", index: "TTS_SI", width: 150 },
                { name: "TTS_PREM_FC", index: "TTS_PREM_FC", width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {

            }),


        // FAC In Premium Summary
        $scope.facinpremium_grid = u.default_grid("#gridTreatAppor", "#gridTreatApporPager", "Treaty Apportionment",
            ["Type", "Limit", "Share Amount", "Share %"],
            [
                { name: "RIS_TYPE", index: "RIS_TYPE", width: 150 },
                { name: "RIS_LIMIT", index: "RIS_LIMIT", width: 150 },
                { name: "RIS_SHARE_AMT_FC", index: "RIS_SHARE_AMT_FC", width: 150 },
                { name: "RIS_SHARE_PERC", index: "RIS_SHARE_PERC", width: 150 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {

            }),


        // Reinsurance Summary
        $scope.reinsurance_grid = u.default_grid("#gridRISummary", "#gridRISummaryPager", "Reinsurance Summary",
            ["Risk ID", "Reg. NO", "Start Date", "End Date", "RI Sum Insured", "RI Premium FC", "RI Premium BC"],
            [
                { name: "RISK_ID", index: "VEH_ID", width: 150 },
                { name: "RISK_REG_NO", index: "RISK_REG_NO", width: 150 },
                { name: "RISK_START_DATE", index: "RISK_START_DATE", width: 150 },
                { name: "RISK_END_DATE", index: "RISK_END_DATE", width: 150 },
                { name: "RISK_RI_SI", index: "RISK_RI_SI", width: 150 },
                { name: "RISK_RI_PREM_FC", index: "RISK_RI_PREM_FC", width: 150 },
                { name: "VEH_RI_PREM_BC", index: "VEH_RI_PREM_BC", width: 150 },
            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {

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
        $scope.prodRisks_grid = u.default_grid("#gridProdRisk", "#gridProdRiskPager", "Bond Risk",
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


        // Coinsurnace Member or FAC Inward Business Grid
        $scope.grdfacInward_grid = u.default_grid("#grdfacInward", "#grdfacInwardPager", "FAC Inward Details",
            ["Cedant Code", "Cedant Name", "Referential No.", "Acceptance No.", "Comment", "Original SI FC", "Original SI BC",
             "Original Premium FC", "Original Premium BC", "Share %", "Commission %", "FAC Inward SI FC", "FAC Inward SI BC",
             "FAC Inward Premium FC", "FAC Inward Premium BC", "FAC Inward Comm FC", "FAC Inward Comm FC", "Sys ID", "Polh ID",
             "Created by", "Created date", "Status", "Companies"],
            [
                { name: "FINW_CEDANT_CODE", index: "FINW_CEDANT_CODE", width: 150 },
                { name: "FINW_CEDANT_NAME", index: "FINW_CEDANT_NAME", width: 150 },
                { name: "FINW_REF_NO", index: "FINW_REF_NO", width: 150 },
                { name: "FINW_ACCPT_NO", index: "FINW_ACCPT_NO", hidden: false, width: 200 },
                { name: "FINW_COMMENT", index: "FINW_COMMENT", width: 150 },
                { name: "FINW_ORIG_SI_FC", index: "FINW_ORIG_SI_FC", width: 150 },
                { name: "FINW_ORIG_SI_BC", index: "FINW_ORIG_SI_BC", width: 150 },

                { name: "FINW_ORIG_PREM_FC", index: "FINW_ORIG_PREM_FC", width: 150 },
                { name: "FINW_ORIG_PREM_BC", index: "FINW_ORIG_PREM_BC", width: 150 },
                { name: "FINW_SHARE_PERC", index: "FINW_SHARE_PERC", hidden: false, width: 200 },
                { name: "FINW_COMM_PERC", index: "FINW_COMM_PERC", width: 150 },
                { name: "FINW_SI_FC", index: "FINW_SI_FC", width: 150 },
                { name: "FINW_SI_BC", index: "FINW_SI_BC", width: 150 },
                { name: "FINW_PREM_FC", index: "FINW_PREM_FC", width: 150 },
                { name: "FINW_PREM_BC", index: "FINW_PREM_BC", width: 150 },
                { name: "FINW_COMM_FC", index: "FINW_COMM_FC", width: 150 },
                { name: "FINW_COMM_BC", index: "FINW_COMM_BC", width: 150 },

                { name: "FINW_SYS_ID", index: "FINW_SYS_ID", hidden: true, width: 150 },
                { name: "FINW_POLH_SYS_ID", index: "FINW_POLH_SYS_ID", hidden: true, width: 150 },

                { name: "FINW_CRTE_BY", index: "FINW_CRTE_BY", hidden: false, width: 200 },
                { name: "FINW_CRTE_DATE", index: "FINW_CRTE_DATE", hidden: false, width: 200 },
                { name: "FINW_STATUS", index: "FINW_STATUS", hidden: false, width: 200 },
                { name: "INS_RI_FAC_INW_COMPANY", index: "INS_RI_FAC_INW_COMPANY", hidden: false, width: 200 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.grdfacInward_grid;
                $("form input[name='FINW_CEDANT_CODE']").data("update", true);
                u.fill_form({
                    FINW_CEDANT_CODE: grid.jqGrid("getCell", selId, "FINW_CEDANT_CODE"),
                    FINW_CEDANT_NAME: grid.jqGrid("getCell", selId, "FINW_CEDANT_NAME"),
                    FINW_ORIG_SI_FC: grid.jqGrid("getCell", selId, "FINW_ORIG_SI_FC"),

                    FINW_REF_NO: grid.jqGrid("getCell", selId, "FINW_REF_NO"),
                    FINW_ACCPT_NO: grid.jqGrid("getCell", selId, "FINW_ACCPT_NO"),
                    FINW_COMMENT: grid.jqGrid("getCell", selId, "FINW_COMMENT"),

                    FINW_ORIG_SI_BC: grid.jqGrid("getCell", selId, "FINW_ORIG_SI_BC"),
                    FINW_ORIG_PREM_FC: grid.jqGrid("getCell", selId, "FINW_ORIG_PREM_FC"),
                    FINW_ORIG_PREM_BC: grid.jqGrid("getCell", selId, "FINW_ORIG_PREM_BC"),
                    FINW_SHARE_PERC: grid.jqGrid("getCell", selId, "FINW_SHARE_PERC"),

                    FINW_COMM_PERC: grid.jqGrid("getCell", selId, "FINW_COMM_PERC"),
                    FINW_SI_FC: grid.jqGrid("getCell", selId, "FINW_SI_FC"),
                    FINW_SI_BC: grid.jqGrid("getCell", selId, "FINW_SI_BC"),
                    FINW_PREM_BC: grid.jqGrid("getCell", selId, "FINW_PREM_BC"),
                    FINW_PREM_FC: grid.jqGrid("getCell", selId, "FINW_PREM_FC"),
                    FINW_COMM_FC: grid.jqGrid("getCell", selId, "FINW_COMM_FC"),
                    FINW_COMM_BC: grid.jqGrid("getCell", selId, "FINW_COMM_BC"),

                }, "#facInwardForm");

                u.fill_form({

                    FINW_PAP_FINW_SYS_ID: grid.jqGrid("getCell", selId, "FINW_SYS_ID"),

                }, "#InwardParticipantsForm");

            }),


        // Coinsurnace Member or FAC Invward Participants Grid
        $scope.grdInwdParticipant_grid = u.default_grid("#grdInwdParticipants", "#grdInwdParticipantsPager", "FAC Inward Details",
            [" Code", "Name", "Share %", "Share SI", "Share Premium", "Sys ID", "Fac Inward ID", "Created by", "Created date", "Status"],
            [
                { name: "FINW_PAP_CODE", index: "FINW_PAP_CODE", width: 150 },
                { name: "FINW_PAP_NAME", index: "FINW_PAP_NAME", width: 150 },
                { name: "FINW_PAP_SHARE_PERC", index: "FINW_PAP_SHARE_PERC", width: 150 },
                { name: "FINW_PAP_SHARE_SI", index: "FINW_PAP_SHARE_SI", hidden: false, width: 200 },
                { name: "FINW_PAP_SHARE_PREM", index: "FINW_PAP_SHARE_PREM", width: 150 },
                { name: "FINW_PAP_SYS_ID", index: "FINW_PAP_SYS_ID", width: 150 },
                { name: "FINW_PAP_FINW_SYS_ID", index: "FINW_PAP_FINW_SYS_ID", width: 150 },
                { name: "FINW_PAP_CRTE_BY", index: "FINW_PAP_CRTE_BY", hidden: false, width: 200 },
                { name: "FINW_PAP_CRTE_DATE", index: "FINW_PAP_CRTE_DATE", hidden: false, width: 200 },
                { name: "FINW_PAP_STATUS", index: "FINW_PAP_STATUS", hidden: false, width: 200 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.grdInwdParticipant_grid;
                $("form input[name='FINW_PAP_CODE']").data("update", true);
                u.fill_form({
                    FINW_PAP_CODE: grid.jqGrid("getCell", selId, "FINW_PAP_CODE"),
                    FINW_PAP_NAME: grid.jqGrid("getCell", selId, "FINW_PAP_NAME"),
                    FINW_PAP_SHARE_PERC: grid.jqGrid("getCell", selId, "FINW_PAP_SHARE_PERC"),
                    FINW_PAP_SHARE_SI: grid.jqGrid("getCell", selId, "FINW_PAP_SHARE_SI"),
                    FINW_PAP_SHARE_PREM: grid.jqGrid("getCell", selId, "FINW_PAP_SHARE_PREM"),

                }, "#InwardParticipantsForm");
            }),

        // Coinsurance Leader Business Grid
        $scope.grdCoinsLeader_grid = u.default_grid("#grdCoinsLeader", "#grdCoinsLeaderPager", "FAC Inward Details",
            ["Our Share %", "Our Share SI FC", "Our Share SI BC", "Our Share Premium FC", "Our Share Premium BC", "Member Share %", "Member Share SI FC", "Member Share SI BC",
             "Member Share Premium FC", "Member Share Premium BC", "RI Code", "RI Name", "RI Share %", "RI Share Comm", "RI Share SI", "RI Share Premium", "RI Share Comm",
             "Sys ID", "Polh ID", "Risk ID", "Created by", "Created date", "Status"],
            [
                { name: "FOTW_SHARE_PERC", index: "FOTW_SHARE_PERC", width: 150 },
                { name: "FOTW_SHARE_SI_FC", index: "FOTW_SHARE_SI_FC", width: 150 },
                { name: "FOTW_SHARE_SI_BC", index: "FOTW_SHARE_SI_BC", hidden: false, width: 200 },
                { name: "FOTW_SHARE_PREM_FC", index: "FOTW_SHARE_PREM_FC", width: 150 },
                { name: "FOTW_SHARE_PREM_BC", index: "FOTW_SHARE_PREM_BC", width: 150 },
                { name: "FOTW_MEM_SHARE_PERC", index: "FOTW_MEM_SHARE_PERC", width: 150 },
                { name: "FOTW_MEM_SI_FC", index: "FOTW_MEM_SI_FC", width: 150 },
                { name: "FOTW_MEM_SI_BC", index: "FOTW_MEM_SI_BC", width: 150 },
                { name: "FOTW_MEM_PREM_FC", index: "FOTW_MEM_PREM_FC", width: 150 },
                { name: "FOTW_MEM_PREM_BC", index: "FOTW_MEM_PREM_BC", width: 150 },

                { name: "FOTW_RI_MEM_CODE", index: "FOTW_RI_MEM_CODE", width: 150 },
                { name: "FOTW_RI_MEM_NAME", index: "FOTW_RI_MEM_NAME", width: 150 },
                { name: "FOTW_RI_PERC", index: "FOTW_RI_PERC", width: 150 },
                { name: "FOTW_RI_COMM", index: "FOTW_RI_COMM", width: 150 },

                { name: "FOTW_RI_SHARE_SI", index: "FOTW_RI_SHARE_SI", width: 150 },
                { name: "FOTW_RI_SHARE_PREM", index: "FOTW_RI_SHARE_PREM", width: 150 },
                { name: "FOTW_RI_SHARE_COMM", index: "FOTW_RI_SHARE_COMM", width: 150 },

                { name: "FOTW_SYS_ID", index: "FOTW_SYS_ID", width: 150 },
                { name: "FOTW_POLH_SYS_ID", index: "FOTW_POLH_SYS_ID", width: 150 },
                { name: "FOTW_RISK_SYS_ID", index: "FOTW_RISK_SYS_ID", width: 150 },

                { name: "FOTW_CRTE_BY", index: "FOTW_CRTE_BY", hidden: false, width: 200 },
                { name: "FOTW_CRTE_DATE", index: "FOTW_CRTE_DATE", hidden: false, width: 200 },
                { name: "FOTW_STATUS", index: "FOTW_STATUS", hidden: false, width: 200 },

            ],
           //Retrive Grid data into form input fields on row click..
            function (selId) {
                var grid = $scope.grdCoinsLeader_grid;

                $("form input[name='FOTW_RI_MEM_CODE']").data("update", true);
                u.fill_form({
                    FOTW_SHARE_PERC: grid.jqGrid("getCell", selId, "FOTW_SHARE_PERC"),
                    FOTW_MEM_SHARE_PERC: grid.jqGrid("getCell", selId, "FOTW_MEM_SHARE_PERC"),
                    FOTW_SHARE_SI_FC: grid.jqGrid("getCell", selId, "FOTW_SHARE_SI_FC"),
                    FOTW_SHARE_SI_BC: grid.jqGrid("getCell", selId, "FOTW_SHARE_SI_BC"),
                    FOTW_SHARE_PREM_FC: grid.jqGrid("getCell", selId, "FOTW_SHARE_PREM_FC"),
                    FOTW_SHARE_PREM_BC: grid.jqGrid("getCell", selId, "FOTW_SHARE_PREM_BC"),
                    FOTW_MEM_SI_FC: grid.jqGrid("getCell", selId, "FOTW_MEM_SI_FC"),

                    FOTW_MEM_SI_BC: grid.jqGrid("getCell", selId, "FOTW_MEM_SI_BC"),
                    FOTW_MEM_PREM_FC: grid.jqGrid("getCell", selId, "FOTW_MEM_PREM_FC"),
                    FOTW_MEM_PREM_BC: grid.jqGrid("getCell", selId, "FOTW_MEM_PREM_BC"),
                    FOTW_RI_MEM_CODE: grid.jqGrid("getCell", selId, "FOTW_RI_MEM_CODE"),

                    FOTW_RI_MEM_NAME: grid.jqGrid("getCell", selId, "FOTW_RI_MEM_NAME"),
                    FOTW_RI_PERC: grid.jqGrid("getCell", selId, "FOTW_RI_PERC"),
                    FOTW_RI_COMM: grid.jqGrid("getCell", selId, "FOTW_RI_COMM"),
                    FOTW_RI_SHARE_SI: grid.jqGrid("getCell", selId, "FOTW_RI_SHARE_SI"),
                    FOTW_RI_SHARE_PREM: grid.jqGrid("getCell", selId, "FOTW_RI_SHARE_PREM"),
                    FOTW_RI_SHARE_COMM: grid.jqGrid("getCell", selId, "FOTW_RI_SHARE_COMM"),

                }, "#CoinsLeaderForm");
            }),


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
        });

        /*----------------------
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
                    FacbuttonsDis();
                    $scope.lov.call_dialog("Select Business Source", "get_lov_business_source", $scope.dialog_data);
                    break;
                case "btn_customer":
                    $scope.lov.call_dialog("Select Customer", "get_lov_customer", $scope.dialog_data);
                    break;
                case "btn_base_currency":
                    $scope.lov.call_dialog("Select Currency", "get_lov_currency", $scope.dialog_data);
                    break;
                case "btn_risk":
                    $scope.lov.call_dialog("Select Risk", "get_lov_motor_risks", $scope.dialog_data);
                    break;
                case "btn_customer_type":
                    $scope.lov.call_dialog("Select Customer type", "get_lov_customertypes", $scope.dialog_data);
                    break;
                case "btn_facinw_cedent":
                    $scope.lov.call_dialog("Select Cedent Company", "get_lov_cedent", $scope.dialog_data);
                    break;
                case "btn_pap_com":
                    $scope.lov.call_dialog("Select Participating Company", "get_lov_com", $scope.dialog_data);
                    break;
                case "btn_member_code":
                    $scope.lov.call_dialog("Select RI Company", "get_lov_member_com", $scope.dialog_data);
                    break;
            }
        });

        /*--------------------------------------------------
        * Retrieving customers on calling function
        *------------------------------------------------*/

        //$("#btnQueryCustomers").on('click', function () {
        //    getProductRiskLov()
        //});


        $("#btn_CustomersLov").on('click', function () {

            $("#customerLovModal").modal();

        });


        /*---------------------------
         * Search Customers
         *-------------------------*/
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

        });


        /*--------------------------------------------------
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

                        result[i]["ENG_FEE_FC_AMOUNT"] = result[i]["PRF_FEE_AMOUNT"];
                        result[i]["ENG_FEE_BC_AMOUNT"] = result[i]["PRF_FEE_AMOUNT"];
                        result[i]["ENG_FEE_CODE"] = result[i]["PRF_FEE_CODE"];
                        result[i]["ENG_FEE_RK_NO"] = result[i]["FEE_NAME"];
                        result[i]["ENG_FEE_NAME"] = result[i]["PRF_SYS_ID"];
                        result[i]["ENG_FEE_RK_CODE"] = $("#ENG_RISK_CODE").val();
                        result[i]["ENG_FEE_RK_SYS_ID"] = $("#ENG_SYS_ID").val();
                        result[i]["ENG_FEE_CRTE_BY"] = "Admin";
                        result[i]["ENG_FEE_CRTE_DATE"] = Date.now();
                        result[i]["ENG_FEE_STATUS"] = "U";
                        //
                        // $scope.riskFees_grid.jqGrid('setCell', result[i], 'RISK_CODE', );

                        $scope.riskFees_grid.addRowData(result[i]["MRF_FEE_CODE"], result[i]);
                    }
                }

                var compFeedata = u.get_grid_data($scope.riskFees_grid);
                var linq = Enumerable.From(compFeedata);
                var result =
                    linq.GroupBy(function (x) { return x.ENG_FEE_CODE; })
                        .Select(function (x) {
                            console.log(x);
                            return {
                                POL_FEE_CODE: x.Key(),
                                POL_FEE_NAME: x.source[0]["ENG_FEE_NAME"],
                                POL_FEE_FC_AMOUNT: x.Sum(function (y) { return y.ENG_FEE_FC_AMOUNT | 0; }),
                                POL_FEE_BC_AMOUNT: x.Sum(function (y) { return y.ENG_FEE_BC_AMOUNT | 0; }),
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

                                result[i]["RCOV_RI_YN"] = result[i]["MS_UDW_COVERS"]["CVR_RI_ENG_OTHERLICABLE"];

                                result[i]["CVR_USER_PREMIUM"] = result[i]["MS_UDW_COVERS"]["CVR_USER_PREMIUM"];
                                result[i]["RCOV_PREM_REFUND"] = result[i]["MS_UDW_COVERS"]["RCOV_PREM_REFUND"];
                                result[i]["RCOV_RATE_CHANGE"] = result[i]["MS_UDW_COVERS"]["CVR_RATE_CHANGE"];
                                result[i]["RCOV_SI_CHANGE"] = result[i]["MS_UDW_COVERS"]["CVR_SI_CHANGE"];
                                result[i]["RCOV_COVER_LEVEL"] = result[i]["MS_UDW_COVERS"]["RCOV_COVER_LEVEL"];

                                result[i]["RCOV_RISK_SYS_ID"] = $("#ENG_OTHER_SYS_ID").val();
                                result[i]["RCOV_RISK_NO"] = $("#ENG_OTHER_RISK_ID").val();
                                result[i]["RCOV_SI_FC"] = $("#RCOV_SI_FC").val();


                                var deftCoverCode = result[i].RCOV_CODE;
                                var newRiskCode = $("#ENG_OTHER_SYS_ID").val();

                                var verifyRiskCover = deftCoverCode + newRiskCode; //alert(verifyRiskCover);

                                //add if Cover is not found in the Grid//

                                if ($.inArray(verifyRiskCover, CodeArray) < 0) {

                                    //fill in default covers if not in the grid

                                    $scope.cover_grid.addRowData(result[i].ID, result[i]);

                                    u.growl_success("Risk Cover successfully added");
                                    u.hide_confirm();
                                }
                                else {

                                    u.growl_warning("Cover exists for this Risk, you cannot add same Cover " + deftCoverCode);
                                    u.hide_confirm();
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
                CURR_RATE = parseFloat($("#POLH_CURRENCY_RATE").val()).toFixed(2);

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

                    grid.jqGrid("setCell", rowId, "RCOV_ANNL_PREM_FC", $("#RCOV_ANNL_PREM_FC").val());
                    grid.jqGrid("setCell", rowId, "RCOV_ANNL_PREM_BC", $("#RCOV_ANNL_PREM_BC").val());

                    //call
                    //$scope.SumCoverRiskValues();


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

        $("#btn_risk_cover").click(function () {
            var grid = $("#gridCARInterest");
            var sel_id = grid.jqGrid('getGridParam', 'selrow');
            var RiskID = grid.jqGrid('getCell', sel_id, 'CAR_SYS_ID');
            if (RiskID == $("#CAR_SYS_ID").val()) {
                //Hide covers not related to selected risk
                $scope.hideShowCovers();
                $("#RiskCoverModal").modal();
            }
            else {
                u.growl_warning("No Row selected");
            }
        });

        $("#btn_risk_cover1").click(function () {
            var grid = $("#gridCARCPMInterest");
            var sel_id = grid.jqGrid('getGridParam', 'selrow');
            var RiskID = grid.jqGrid('getCell', sel_id, 'CPM_SYS_ID');
            if (RiskID == $("#CPM_SYS_ID").val()) {
                //Hide covers not related to selected risk
                $scope.hideCPMShowCovers();
                $("#RiskCoverModal").modal();
            }
            else {
                u.growl_warning("No Row selected");
            }
        });


        
        /*--------------------------------------------------
         * Risk modal dialog
         *------------------------------------------------*/
        //
        $("#btn_open_car").click(function () {
            //if (u.form_validation("#engineeringForm")) {
            //    $("#CARInterestModal").modal();
            //}
            //else {
            //    u.growl_warning("Please fill the Engineering Header form and try again");
            //};
            $("#CARInterestModal").modal();
        });

        $("#btn_open_car_cpm").click(function () {
            //if (u.form_validation("#engineeringForm")) {
            //    $("#CARCPMModal").modal();
            //}
            //else {
            //    u.growl_warning("Please fill the Engineering Header form and try again");
            //};
            $("#CARCPMModal").modal();
        });

        $("#btn_open_car_tpl").click(function () {

            $("#CARTPLModal").modal();
        });

        $("#btn_open_car_lop").click(function () {

            $("#CARLossopModal").modal();
        });

        $("#btn_open_car_con").click(function () {

            $("#CARCONModal").modal();
        });



        $("#btn_Bonds_OnClose").click(function () {

            if (u.grid_empty($scope.eng_grid)) {
                u.modal_confirmation("The Grid is empty, do you want to close form?", function (e) {
                    $("#BondModal").modal("hide");
                    u.hide_confirm();
                });
            }
            else {
                $("#BondModal").modal("hide");
            }

        });




        /*--------------------------------------------------
          * Adding CAR Interest Risk Details
          *------------------------------------------------*/
        //
        $("#btn_add_car").on('click', function () {

            if (u.form_validation("#carinterestForm")) {

                if ($("#CAR_RISK_TYPE").val() === "") return u.modal_alert("Please Enter CAR risk type");

                $("#CAR_SYS_ID").val("");

                if ($("#CAR_SYS_ID").val() == "") {
                    RetnSequenceNo("", getVehSeqNo);

                    function getVehSeqNo(data) {
                        $("#CAR_SYS_ID").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add the EAR Period Details?", function () {

                    var rowIds = $scope.carinterest_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.carinterest_grid.jqGrid('getCell', currRow, 'CAR_RISK_TYPE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CAR_RISK_TYPE').val(), Code) < 0) {

                        var FormData = u.parse_form("#carinterestForm");
                        FormData.CAR_STATUS = "U";
                        FormData.CAR_CRTE_BY = "Admin";
                        FormData.CAR_CRTE_DATE = u.get_date();
                        $scope.carinterest_grid.addRowData(FormData.CAR_RISK_TYPE, FormData);
                        u.hide_confirm();
                        u.growl_success("CAR successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("CAR with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });



        /*--------------------------------
        * Edit/Update Function CAR Interest
        *------------------------------*/
        //
        $("#btn_update_car").on('click', function () {

            if (u.grid_empty($scope.carinterest_grid)) return u.growl_info("CAR Interest grid is empty");

            if (u.form_validation("#carinterestForm")) {

                u.modal_confirmation("Are you sure you want to update the selected CAR Interest?", function () {

                    var grid = $scope.carinterest_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "CAR_SYS_ID");

                    if (code === $("#CAR_SYS_ID").val()) {
                        var data = u.parse_form("#carinterestForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("CAR Interest Details updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });



        /*----------------------------------------------------
        * Remove record or Mark for deletion from CAR Interest
        *---------------------------------------------------*/
        //
        $("#btn_remove_car").on('click', function () {

            if (u.grid_empty($scope.carinterest_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.carinterest_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CAR_STATUS');

            var RiskNo = grid.jqGrid('getCell', row_id, 'CAR_SYS_ID');

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'D');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'red' });
                        }
                    }

                    grid.jqGrid('setCell', row_id, 'CAR_STATUS', 'D');
                    $('#' + row_id, '#gridCARInterest').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    for (var i = 0, len = covRowIds.length; i < len; i++) {
                        var covCurrRow = covRowIds[i];

                        //get value of the cell or column in an array

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'A');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'black' });
                        }
                    }

                    $('#' + row_id, '#gridCARInterest').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CAR_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });



        /*-----------------------------------
        * exporting of the grid to excel CAR Interest
        *----------------------------------*/
        $("#export-car-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.carinterest_grid, ["ID"], "CAR_List_Excel");
        });



        /*--------------------------------------------------
        * Adding CPM Interest Risk Details
        *------------------------------------------------*/
        //
        $("#btn_add_cpm").on('click', function () {

            if (u.form_validation("#carcpmForm")) {

                if ($("#CPM_RISK_TYPE").val() === "") return u.modal_alert("Please Enter CPM risk type");

                $("#CPM_SYS_ID").val("");

                if ($("#CPM_SYS_ID").val() == "") {
                    RetnSequenceNo("", getVehSeqNo);

                    function getVehSeqNo(data) {
                        $("#CPM_SYS_ID").val(data);
                    }
                }

                u.modal_confirmation("Are you sure you want to add the EAR Period Details?", function () {

                    var rowIds = $scope.carcpm_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.carcpm_grid.jqGrid('getCell', currRow, 'CPM_RISK_TYPE');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CPM_RISK_TYPE').val(), Code) < 0) {

                        var FormData = u.parse_form("#carcpmForm");
                        FormData.CPM_STATUS = "U";
                        FormData.CPM_CRTE_BY = "Admin";
                        FormData.CPM_CRTE_DATE = u.get_date();
                        $scope.carcpm_grid.addRowData(FormData.CPM_RISK_TYPE, FormData);
                        u.hide_confirm();
                        u.growl_success("CPM successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("CPM with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        /*--------------------------------
        * Edit/Update Function CPM Interest
        *------------------------------*/
        //
        $("#btn_update_cpm").on('click', function () {

            if (u.grid_empty($scope.carcpm_grid)) return u.growl_info("CPM Interest grid is empty");

            if (u.form_validation("#carcpmForm")) {

                u.modal_confirmation("Are you sure you want to update the selected CPM Interest?", function () {

                    var grid = $scope.carcpm_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "CPM_SYS_ID");

                    if (code === $("#CPM_SYS_ID").val()) {
                        var data = u.parse_form("#carcpmForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("CPM Interest Details updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*----------------------------------------------------
        * Remove record or Mark for deletion from CPM Interest
        *---------------------------------------------------*/
        //
        $("#btn_remove_cpm").on('click', function () {

            if (u.grid_empty($scope.carcpm_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.carcpm_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CPM_STATUS');

            var RiskNo = grid.jqGrid('getCell', row_id, 'CPM_SYS_ID');

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'D');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'red' });
                        }
                    }

                    grid.jqGrid('setCell', row_id, 'CPM_STATUS', 'D');
                    $('#' + row_id, '#gridCARCPMInterest').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    for (var i = 0, len = covRowIds.length; i < len; i++) {
                        var covCurrRow = covRowIds[i];

                        //get value of the cell or column in an array

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'A');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'black' });
                        }
                    }

                    $('#' + row_id, '#gridCARCPMInterest').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CPM_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });



        /*-----------------------------------
        * exporting of the grid to excel CPM Interest
        *----------------------------------*/
        $("#export-cpm-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.carcpm_grid, ["ID"], "CPM_List_Excel");
        });



        /*--------------------------------------------------
        * Adding CON Interest Risk Details
        *------------------------------------------------*/
        //
        $("#btn_add_con").on('click', function () {

            if (u.form_validation("#carcpmForm")) {

                if ($("#CONVAL_NAME").val() === "") return u.modal_alert("Please Enter CON risk type");

                u.modal_confirmation("Are you sure you want to add the CON Period Details?", function () {

                    var rowIds = $scope.carcon_grid.jqGrid('getDataIDs');

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
                        var cellValue = $scope.carcon_grid.jqGrid('getCell', currRow, 'CONVAL_NAME');

                        Code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($('#CONVAL_NAME').val(), Code) < 0) {

                        var FormData = u.parse_form("#carconForm");
                        FormData.CON_STATUS = "U";
                        FormData.CON_CRTE_BY = "Admin";
                        FormData.CON_CRTE_DATE = u.get_date();
                        $scope.carcon_grid.addRowData(FormData.CONVAL_NAME, FormData);
                        u.hide_confirm();
                        u.growl_success("CON successfully added to grid");
                    }
                    else {
                        u.hide_confirm();
                        u.growl_warning("CON with code " + cellValue + " Already exists");
                    }
                });

            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        /*--------------------------------
        * Edit/Update Function CPM Interest
        *------------------------------*/
        //
        $("#btn_update_con").on('click', function () {

            if (u.grid_empty($scope.carcon_grid)) return u.growl_info("CON Interest grid is empty");

            if (u.form_validation("#carconForm")) {

                u.modal_confirmation("Are you sure you want to update the selected CON Interest?", function () {

                    var grid = $scope.carcon_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "CONVAL_NAME");

                    if (code === $("#CONVAL_NAME").val()) {
                        var data = u.parse_form("#carconForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("CON Interest Details updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*----------------------------------------------------
        * Remove record or Mark for deletion from CPM Interest
        *---------------------------------------------------*/
        //
        $("#btn_remove_con").on('click', function () {

            if (u.grid_empty($scope.carcon_grid)) return u.modal_alert("Grid is empty!!!");

            var grid = $scope.carcon_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CON_STATUS');

            var RiskNo = grid.jqGrid('getCell', row_id, 'CONVAL_NAME');

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

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

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'D');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'red' });
                        }
                    }

                    grid.jqGrid('setCell', row_id, 'CPM_STATUS', 'D');
                    $('#' + row_id, '#gridCARCPMInterest').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    for (var i = 0, len = covRowIds.length; i < len; i++) {
                        var covCurrRow = covRowIds[i];

                        //get value of the cell or column in an array

                        var getCovRiskID = covGrid.jqGrid('getCell', covCurrRow, 'RCOV_RISK_SYS_ID');

                        if (getCovRiskID == RiskNo) {

                            covGrid.jqGrid('setCell', covCurrRow, 'RCOV_STATUS', 'A');

                            $('#' + covCurrRow, '#gridAppCovers').css({ color: 'black' });
                        }
                    }

                    $('#' + row_id, '#gridCARCPMInterest').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CPM_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

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


        $("#btnTreatyAppor").click(function () {
            //if (u.grid_empty($scope.motor_grid)) return u.modal_alert("Motor Grid is empty!!!");
            $("#treatyApportionmentModal").modal();


        });

        $("#btnTreatyShare").click(function () {
            //if (u.grid_empty($scope.motor_grid)) return u.modal_alert("Motor Grid is empty!!!");
            $("#treatyShareModal").modal();

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

            var Pol_Ins_Source = $("#POLH_INS_SOURCE").val();

            if (Pol_Txn_State === "C") return u.growl_warning("The Policy is already Confirmed, Please unconfirm before saving");
            if (Pol_Txn_State === "P") return u.growl_warning("The Policy is Approved, You cannot save the Policy");
            if (Pol_Ins_Source === "FAC-IN" && u.grid_empty($scope.grdfacInward_grid)) {
                return u.growl_warning("Facultative Inward is selected, Please add Fac Inward details to it's grid");
            }
            if (Pol_Ins_Source === "CO-L" && u.grid_empty($scope.grdCoinsLeader_grid)) {
                return u.growl_warning("Coinsurance Leader is selected, Please add Coinsurance Leader details to it's grid");
            }
            if (Pol_Ins_Source === "CO-M" && u.grid_empty($scope.grdfacInward_grid)) {
                return u.growl_warning("Coinsurance Member is selected, Please add Coinsurance Member details to it's grid");
            }

            if (!u.form_validation("#polheaderForm")) {
                return u.growl_warning("Please fill the fields that are marked red");
            }

            if (u.grid_empty($scope.cover_grid)) {
                return u.growl_warning("Please add Risk Cover");
            }

            if (u.grid_empty($scope.eng_grid)) {
                return u.growl_warning("Please add Bond Details");
            }

            u.modal_confirmation("Are you sure you want to save?", function (e) {

                var polhData = u.parse_form("#polheaderForm");

                //polhData.POLH_STATUS = "U";
                //polhData.POLH_TXN_STATE = "S";
                //polhData.POLH_END_NO = 0;

                polhData.INS_UDW_ENG_OTHERS = u.get_grid_data($scope.eng_grid);

                var INS_UWD_RISK_COVERS = u.get_grid_data($scope.cover_grid);

                for (var i in polhData.INS_UDW_ENG_OTHERS) {
                    //loop through every risk and obtain the sys_id of the risk
                    var id = polhData.INS_UDW_ENG_OTHERS[i]["ENG_OTHER_SYS_ID"];
                    polhData.INS_UDW_ENG_OTHERS[i]["INS_UWD_RISK_COVERS"] = [];

                    for (var y in INS_UWD_RISK_COVERS) {
                        //find covers which have the same the same risk sys_id
                        if (INS_UWD_RISK_COVERS[y]["RCOV_RISK_SYS_ID"] === id) {
                            polhData.INS_UDW_ENG_OTHERS[i]["INS_UWD_RISK_COVERS"].push(INS_UWD_RISK_COVERS[y]);
                        }

                    }

                }

                polhData.INS_RI_FAC_INWARD = u.get_grid_data($scope.grdfacInward_grid);

                for (var i in polhData.INS_RI_FAC_INWARD) {

                    polhData.INS_RI_FAC_INWARD[i]["INS_RI_FAC_INW_COMPANY"] = JSON.parse(polhData.INS_RI_FAC_INWARD[i]["INS_RI_FAC_INW_COMPANY"]);

                }

                console.log(polhData);

                polhData.INS_UDW_ENG_OTHER_FEES = u.get_grid_data($scope.riskFees_grid);

                polhData.INS_UWD_INTERMEDIARY_COMM = u.get_grid_data($scope.intermCom_grid);

                polhData.INS_UDW_POL_FEES = u.get_grid_data($scope.polfees_grid);

                polhData.INS_RI_FAC_OUTWARD = u.get_grid_data($scope.grdCoinsLeader_grid);

                console.log(polhData);

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_policy(polhData, function (responseData) {
                        $scope.saving = false;
                        u.hide_confirm();
                        if (responseData.state) {

                            var coverRowIds = $scope.cover_grid.jqGrid("getDataIDs");
                            var engRowIds = $scope.eng_grid.jqGrid("getDataIDs");
                            var covRecStatus;
                            /*---------------------------------
                             * update motor row status
                             *-------------------------------*/
                            for (var i = 0; i < engRowIds.length; i++) {
                                covRecStatus = $scope.eng_grid.jqGrid("getCell", engRowIds[i], "ENG_OTHER_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    $scope.eng_grid.jqGrid("delRowData", engRowIds[i]);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    $scope.eng_grid.jqGrid("setCell", engRowIds[i], "ENG_OTHER_STATUS", "A");
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
                    }, function () {
                        u.growl_error("Server Error please try again later.");
                    });
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

                var engRowIds = $scope.eng_grid.jqGrid("getDataIDs");
                var coverRowIds = $scope.cover_grid.jqGrid("getDataIDs");
                var intermComIds = $scope.intermCom_grid.jqGrid("getDataIDs");
                var premiumregIds = $scope.premiumreg_grid.jqGrid("getDataIDs");
                var riskFeesIds = $scope.riskFees_grid.jqGrid("getDataIDs");
                var polfeesIds = $scope.polfees_grid.jqGrid("getDataIDs");
                //alert("Y");
                /*---------------------------------
                    $scope.   
                     * update Endorsement No in the Grids
                     *-------------------------------*/
                //Bond Risks
                for (var i = 0; i < engRowIds.length; i++) {

                    $scope.eng_grid.jqGrid("setCell", engRowIds[i], "ENG_OTHER_POLH_END_NO", endNo);
                }
                //Risk Covers
                for (var j = 0; j < coverRowIds.length; j++) {

                    $scope.eng_grid.jqGrid("setCell", coverRowIds[j], "RPCOV_END_NO", endNo);
                }
                //Commissions
                for (var k = 0; k < intermComIds.length; k++) {

                    $scope.intermCom_grid.jqGrid("setCell", intermComIds[k], "CMM_END_NO", endNo);
                }
                ////Prem Register
                for (var l = 0; l < premiumregIds.length; l++) {

                    $scope.premiumreg_grid.jqGrid("setCell", premiumregIds[l], "PR_END_NO", endNo);
                }
                ////Risk Fees
                for (var m = 0; m < riskFeesIds.length; m++) {

                    $scope.riskFees_grid.jqGrid("setCell", riskFeesIds[m], "ENG_OTHER_FEE_END_NO", endNo);
                }
                ////Pol fees summary
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
                s.BondpolicyApproval({ POL_SYS_ID: $("#POLH_SYS_ID").val(), POL_END_NO: $("#POL_END_NO").val(), TXN_TYPE: 1 }, function (response) {
                    if (response.state) {
                        u.growl_success("Policy successfully Approved");
                        //alert(JSON.stringify(response));

                        //alert(JSON.stringify());

                        var txnState = response.result.POLH_TXN_STATE;

                        $("#POLH_TXN_STATE").val(txnState);

                        $("#POLH_TXN_STATE").val(txnState);
                        if (txnState === ("P")) {

                            u.form_text_Green_color();
                            u.form_readonly();
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
                u.form_reset("#engForm");
                $scope.cover_grid.jqGrid('clearGridData');
                $scope.eng_grid.jqGrid('clearGridData');
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

            $scope.eng_grid.jqGrid("clearGridData");
            $scope.cover_grid.jqGrid("clearGridData");

            u.fill_form(policy, "#polheaderForm");

            u.clear_grid_data($scope.eng_grid);
            if (policy.INS_UDW_ENG_OTHERS) {
                for (var i in policy.INS_UDW_ENG_OTHERS) {
                    $scope.eng_grid.addRowData(policy.INS_UDW_ENG_OTHERS[i].ID, policy.INS_UDW_ENG_OTHERS[i]);
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

            //populate risk covers with covers from the engs nd not the policy header
            u.clear_grid_data($scope.cover_grid);
            for (var x in policy.INS_UDW_ENG_OTHERS[i].INS_UWD_RISK_COVERS) {
                //get Cover Names
                policy.INS_UDW_ENG_OTHERS[i].INS_UWD_RISK_COVERS[x]["RCOV_NAME"] = policy.INS_UDW_ENG_OTHERS[i].INS_UWD_RISK_COVERS[x]["MS_UDW_COVERS"]["CVR_NAME"];
                //get Covers
                $scope.cover_grid.addRowData(policy.INS_UDW_ENG_OTHERS[i].INS_UWD_RISK_COVERS[x].RCOV_RISK_SYS_ID, policy.INS_UDW_ENG_OTHERS[i].INS_UWD_RISK_COVERS[x]);
            }
        };


        /*-------------------------------------
      * setting datepicker for date fields
      *------------------------------------*/
        u.set_datepicker("input[name='POLH_POL_START_DATE']");
        u.set_datepicker("input[name='POLH_POL_END_DATE']");
        u.set_datepicker("input[name='ENG_OTHER_START_DATE']");
        u.set_datepicker("input[name='ENG_OTHER_END_DATE']");
        u.set_datepicker("input[name='CUS_DOB']");

        u.set_datepicker("#ENDORSE_DATE");
        u.set_datepicker("#ENDORSE_EFF_DATE");
        u.set_datepicker("#ENDORSE_TO_DATE");
        u.set_datepicker("#NLB_FROM_DATE");
        u.set_datepicker("#NLB_TO_DATE");

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
        * //Risk Cover Rate Calculation
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
            var ExchangeRate = $('#POLH_CURRENCY_RATE').val();

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
        * //Risk Premium entry 
        *---------------------------*/
        document.getElementById("RCOV_SI_FC").addEventListener("focusout", premiumEntry);
        function premiumEntry() {
            var grid = $scope.cover_grid;
            var sel_Id = grid.jqGrid("getGridParam", "selrow");
            var userpremium = grid.jqGrid("getCell", sel_Id, "CVR_USER_PREMIUM");

            if (userpremium == "Y") {

                document.getElementById("RCOV_GROSS_PREM_FC").disabled = false;
                //$('#RCOV_GROSS_PREM_FC').prop('disabled', false);
            }
            else {
                document.getElementById("RCOV_GROSS_PREM_FC").disabled = true;
            };
        }


        /*-----------------------------
        * //Add new customer modal dialog form
        *---------------------------*/

        $("#customerSetupBtn").click(function () {
            /*obtain the customer code*/
            u.form_reset("#customerForm");
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

        $("#btn_Save_Customer").click(function () {
            if (u.form_validation("#customerForm")) {
                u.modal_confirmation("Are you sure you want to save the Assured?", function () {
                    var customerData = u.parse_form("#customerForm");
                    customerData.CUS_CRTE_BY = "Admin";
                    if (!$scope.saving) {
                        $scope.saving = true;
                        s.save_customers([customerData],
                            function (response) {
                                $scope.saving = false;
                                u.hide_confirm();
                                response.state ? u.growl_success(response.message) : u.growl_error(response.message);
                            },
                            function () {
                                $scope.saving = false;
                                u.hide_confirm();
                                u.growl_error("Error Could not save Assured");
                            });
                    }
                });
            } else {
                u.growl_error("Please fill the fields that are marked red");
            }
        });


        //Policy Period days calculations/

        document.getElementById("POLH_POL_START_DATE").addEventListener("focusout", fxnPolPeriodDays);
        document.getElementById("POLH_POL_END_DATE").addEventListener("focusout", fxnPolPeriodDays);


        function fxnPolPeriodDays() {
            //alert("Input field lost focus.");
            var SDate = $("#POLH_POL_START_DATE").val();
            var EDate = $("#POLH_POL_END_DATE").val();

            //set the eng start date to same as policy start date
            $("#ENG_OTHER_START_DATE").val(SDate);
            $("#ENG_OTHER_END_DATE").val(EDate);

            var sdte = new Date(SDate);
            var polUWY = sdte.getFullYear();
            $("#POLH_POL_UW_YEAR").val(polUWY);

            $("#ENG_OTHER_UW_YEAR").val(polUWY);

            //ENG_OTHER_END_DATE
            var StartDate = new Date(SDate);
            var EndDate = new Date(EDate);

            var polPeriodDays = u.get_dateDifference(StartDate, EndDate);

            if (polPeriodDays > 0) {
                $("#POLH_POL_DAYS").val(polPeriodDays);
                $("#ENG_OTHER_PERIOD_DAYS").val(polPeriodDays);
            }
            else if ((polPeriodDays <= 0)) {
                u.growl_warning("Policy End date cannot be less than or equal to start date");

                //reset end date and no. of days
                $("#POLH_POL_END_DATE").val('');
                $("#POLH_POL_DAYS").val('');
                // 
                $("#ENG_OTHER_END_DATE").val('');
                $("#ENG_OTHER_PERIOD_DAYS").val('');
            }
            else {

            }
        }


        /*
        //Hide or show Covers in the Risk Covers (to filter out the covers for particular risk
        */
        $scope.hideShowCovers = function () {

            //get the selected Risk ID
            var cargrid = $scope.carinterest_grid;
            var selId = cargrid.jqGrid("getGridParam", "selrow");
            var carRiskId = cargrid.jqGrid("getCell", selId, "CAR_SYS_ID");

            //get the Risk Cover data
            var covgrid = $scope.cover_grid;
            var rowIds = covgrid.jqGrid("getDataIDs");


            // iterate through the risk cover rows to hide or show covers 

            for (var i = 0, len = rowIds.length; i < len; i++) {

                //get value of the cell or column in an array
                var currRow = rowIds[i];

                var getRiskCovId = covgrid.jqGrid("getCell", currRow, "RCOV_RISK_SYS_ID");

                if (getRiskCovId != carRiskId) {

                    //hide if covers are not for the selected risk 
                    $("#" + currRow).hide();

                }
                else if (getRiskCovId == carRiskId) {

                    //Show if covers are for the selected risk 
                    $("#" + currRow).show();

                }
            }
        };


        $scope.hideCPMShowCovers = function () {

            //get the selected Risk ID
            var cpmgrid = $scope.carcpm_grid;
            var selId = cpmgrid.jqGrid("getGridParam", "selrow");
            var cpmRiskId = cpmgrid.jqGrid("getCell", selId, "CPM_SYS_ID");

            //get the Risk Cover data
            var covgrid = $scope.cover_grid;
            var rowIds = covgrid.jqGrid("getDataIDs");


            // iterate through the risk cover rows to hide or show covers 

            for (var i = 0, len = rowIds.length; i < len; i++) {

                //get value of the cell or column in an array
                var currRow = rowIds[i];

                var getRiskCovId = covgrid.jqGrid("getCell", currRow, "RCOV_RISK_SYS_ID");

                if (getRiskCovId != cpmRiskId) {

                    //hide if covers are not for the selected risk 
                    $("#" + currRow).hide();

                }
                else if (getRiskCovId == cpmRiskId) {

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

            //Risk/Bond Grid
            var riskgrid = $scope.eng_grid;

            var rowIdRisk = riskgrid.jqGrid("getDataIDs");

            var grid = $scope.cover_grid;

            var rowIds = grid.jqGrid('getDataIDs');

            //Risk/Bond Grid
            var riskgrid = $scope.eng_grid;

            var riskRowId = riskgrid.jqGrid("getGridParam", "selrow");

            var riskId = riskgrid.jqGrid("getCell", riskRowId, "ENG_OTHER_SYS_ID");


            // iterate through the rows and check if it exists each of them
            for (var i = 0, len = rowIds.length; i < len; i++) {
                var currRow = rowIds[i];

                //get the risk sys ID from the covers grid
                var getengID = grid.jqGrid('getCell', currRow, "RCOV_RISK_SYS_ID");

                //get Cover type of the cover
                var coverType = grid.jqGrid('getCell', currRow, "COVER_TYPE");

                if (getengID != riskId) {
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

            riskgrid.jqGrid("setCell", riskRowId, 'ENG_OTHER_PREMIUM_FC', sumGrossPremFc.toFixed(2));
            riskgrid.jqGrid("setCell", riskRowId, "ENG_OTHER_TOT_PREM_FC", sumGrossPremFc.toFixed(2));
            riskgrid.jqGrid("setCell", riskRowId, "ENG_OTHER_TOT_PREM_BC", sumGrossPremBc.toFixed(2));

            riskgrid.jqGrid("setCell", riskRowId, "ENG_OTHER_SUM_INSURED", riskSumSifc.toFixed(2));
            riskgrid.jqGrid("setCell", riskRowId, "ENG_OTHER_SI_FC", riskSumSifc.toFixed(2));
            riskgrid.jqGrid("setCell", riskRowId, "ENG_OTHER_SI_BC", riskSumSibc.toFixed(2));

            riskgrid.jqGrid("setCell", riskRowId, "ENG_OTHER_LOAD_FC", sumLoadFc.toFixed(2));
            riskgrid.jqGrid("setCell", riskRowId, "ENG_OTHER_LOAD_BC", sumLoadBc.toFixed(2));

            riskgrid.jqGrid("setCell", riskRowId, "ENG_OTHER_DISC_FC", sumDisFc.toFixed(2));
            riskgrid.jqGrid("setCell", riskRowId, "ENG_OTHER_DISC_BC", sumDisBc.toFixed(2));

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
            var polgrid = $scope.eng_grid;

            var polrowIds = polgrid.jqGrid('getDataIDs');


            // iterate through the rows and check if it exists each of them
            for (var i = 0, len = polrowIds.length; i < len; i++) {

                var currRow = polrowIds[i];

                // Sum risk level Amounts for Policy Level Amounts

                polSifc += parseFloat(polgrid.jqGrid('getCell', currRow, "ENG_OTHER_SI_FC"));
                polSibc += parseFloat(polgrid.jqGrid('getCell', currRow, "ENG_OTHER_SI_BC"));

                polGrossPremFc += parseFloat(polgrid.jqGrid('getCell', currRow, "ENG_OTHER_TOT_PREM_FC"));
                polGrossPremBc += parseFloat(polgrid.jqGrid('getCell', currRow, "ENG_OTHER_TOT_PREM_BC"));

                polLoadFc += parseFloat(polgrid.jqGrid('getCell', currRow, "ENG_OTHER_LOAD_FC"));
                polLoadBc += parseFloat(polgrid.jqGrid('getCell', currRow, "ENG_OTHER_LOAD_BC"));

                polDisFc += parseFloat(polgrid.jqGrid('getCell', currRow, "ENG_OTHER_DISC_FC"));
                polDisBc += parseFloat(polgrid.jqGrid('getCell', currRow, "ENG_OTHER_DISC_BC"));

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


        /*
       Get default covers for the first time of loading the Risk Covers btn_add_motor_details
        */
        function getDefaultRiskCovers() {

            if ($("#POLH_SUB_CLASS_CODE").val() == "") {

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

                    //alert(riskCov);
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

                            result[i]["CVR_USER_PREMIUM"] = result[i]["MS_UDW_COVERS"]["CVR_USER_PREMIUM"];
                            result[i]["RCOV_PREM_REFUND"] = result[i]["MS_UDW_COVERS"]["RCOV_PREM_REFUND"];
                            result[i]["RCOV_RATE_CHANGE"] = result[i]["MS_UDW_COVERS"]["CVR_RATE_CHANGE"];
                            result[i]["RCOV_SI_CHANGE"] = result[i]["MS_UDW_COVERS"]["CVR_SI_CHANGE"];
                            result[i]["RCOV_COVER_LEVEL"] = result[i]["MS_UDW_COVERS"]["RCOV_COVER_LEVEL"];

                            result[i]["RCOV_RISK_SYS_ID"] = $("#ENG_OTHER_SYS_ID").val();
                            result[i]["RCOV_RISK_NO"] = $("#ENG_OTHER_RISK_ID").val();
                            //result[i]["RCOV_SI_FC"] = $("#RCOV_SI_FC").val();


                            var deftCoverCode = result[i].RCOV_CODE;
                            var newRiskCode = $("#ENG_OTHER_SYS_ID").val();

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

                        //SumCoverRiskValues();

                    }
                });
            }
        }


        //Get default Covers if not added
        $("#btn_get_DeftCovers").click(function () {

            getDefaultRiskCovers();

        });


        //Policy Douments Modal
        $("#btnViewDocuments").on('click', function () {

            $("#PolicyDocsModal").modal();

        });

        //View Schedule

        $("#btnRunReports").on('click', function () {

            var e = document.getElementById("Viewpolicyreports");
            var polreports = e.options[e.selectedIndex].value;

            if (polreports == "") {
                u.growl_warning("Nothing selected, Please select to view report");
            }

            else if (polreports == "Debit") {

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

            else if (polreports == "Schedule") {

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
                            window.open("/PolicySchedules/PolicyBondSchedule/" + policyData["POLH_ID"], "result", "width=900,height=1000,toolbar=0,menubar=no,status=no,resizable=yes,location=no,directories=no,scrollbars=yes");
                        }
                    });
                }
                else {
                    u.modal_warning("There is no Policy to view");
                }

            }

        });


        /*--------------------------------------------------
        * FAC Partiicpating company Details Modal 
        *------------------------------------------------*/
        //
        $("#btn_Participant").click(function () {

            //obthain the id of the selected fac details
            var grid = $scope.grdfacInward_grid;
            var selRow = $scope.selectedfac = grid.jqGrid("getGridParam", "selrow");

            if (selRow) {
                //obtain the companies that have been assigned to selected treaty details
                var facString = grid.jqGrid("getCell", selRow, "INS_RI_FAC_INW_COMPANY") || "[]";

                console.log(facString)

                var facJson = [];
                if (facString.length <= 0) {
                }
                facJson = JSON.parse(facString);
                console.log(facJson);

                for (var i in facJson) {
                    $scope.grdInwdParticipant_grid.addRowData(facJson[i].ID, facJson[i]);
                }

                $("#PartipantsModal").modal();
            }
            else {
                u.growl_warning("No FAC Detail selected, Please check and try again");
            }

        });

        $("#companyOk").click(function () {

            if ($scope.selectedfac) {
                //obtain the compnaies that have been selected
                var companies = u.get_grid_data($scope.grdInwdParticipant_grid);
                console.log(companies);
                alert(JSON.stringify(companies))
                //assign the set companies to the selected treaty detials
                $scope.grdfacInward_grid.jqGrid("setCell", $scope.selectedfac, "INS_RI_FAC_INW_COMPANY", JSON.stringify(companies));

            } else {
                u.growl_info("No selected FAC to update");
            }
            $("#PartipantsModal").modal("hide");
            u.clear_grid_data($scope.grdInwdParticipant_grid);
        });

        $("#PartipantsModal .close, #companyClose").click(function () {
            u.clear_grid_data($scope.riCompany_grid);

        });


        /*--------------------------
        * FAC Inward Modal
        *-------------------------*/

        $("#btnFACInward").on("click", function () {

            $("#MemberIwardModal").modal();
            var message = "FAC Inward Details";

            $("#textCoinsMember").text(message);

        });

        /*-------------------------
        * FAC Inward Modal
        *-------------------------*/

        $("#btnCoInsMember").on("click", function () {

            $("#MemberIwardModal").modal();

            //$('#FINW_CEDANT_CODE').val($('#POLH_CMP_CODE').val());
            //$('#FINW_CEDANT_NAME').val($('#CMP_NAME').val());

            var message = "Co-Insurance Details";

            $("#textCoinsMember").text(message);

        });

        /*-------------------------
        * Coinsurance Leader Modal
        *-------------------------*/

        $("#btnCoInsLeader").on("click", function () {

            $("#CoInsLeaderModal").modal();

        });


        /*-----------------------------------
        * Fac Buttons Enable/Disable
        *----------------------------------*/
        document.getElementById("POLH_INS_SOURCE").addEventListener("focusout", FacbuttonsDis);
        function FacbuttonsDis() {
            var Polins = $("#POLH_INS_SOURCE").val();

            if (Polins === "") {
                u.growl_warning("Please select the Policy Insurance Source");
            }
            else if (Polins === "FAC-IN") {
                document.getElementById("btnFACInward").disabled = false;
                document.getElementById("btnCoInsMember").disabled = true
                document.getElementById("btnCoInsLeader").disabled = true;
            }
            else if (Polins === "CO-M") {
                document.getElementById("btnFACInward").disabled = true;
                document.getElementById("btnCoInsMember").disabled = false;
                document.getElementById("btnCoInsLeader").disabled = true;
            }
            else if (Polins === "CO-L") {
                document.getElementById("btnFACInward").disabled = true;
                document.getElementById("btnCoInsMember").disabled = true;
                document.getElementById("btnCoInsLeader").disabled = false;
            }
        }


        /*-----------------------------------
         * Fac Inward Calculations
         *----------------------------------*/
        document.getElementById("FINW_SHARE_PERC").addEventListener("focusout", FacInwardCal);
        document.getElementById("FINW_COMM_PERC").addEventListener("focusout", FacInwardCal);

        function FacInwardCal() {
            var SharePremFC = "";
            var SharePremBC = "";
            var ShareSIFC = "";
            var ShareSIBC = "";
            var CommPercFC = "";
            var CommPercBC = "";

            if ($('#FINW_SHARE_PERC').val == "" || $('#FINW_COMM_PERC').val == "") {
                u.growl_warning("FAC Share % and Commission % is null! ");
            }
            else {
                ShareSIFC = ($('#FINW_SHARE_PERC').val() / 100 * $('#FINW_ORIG_SI_FC').val());
                ShareSIBC = ($('#FINW_SHARE_PERC').val() / 100 * $('#FINW_ORIG_SI_BC').val());

                SharePremFC = ($('#FINW_SHARE_PERC').val() / 100 * $('#FINW_ORIG_PREM_FC').val());
                SharePremBC = ($('#FINW_SHARE_PERC').val() / 100 * $('#FINW_ORIG_PREM_BC').val());
                CommPercFC = ($('#FINW_COMM_PERC').val() * $('#FINW_ORIG_PREM_FC').val() / 100);
                CommPercBC = ($('#FINW_COMM_PERC').val() * $('#FINW_ORIG_PREM_BC').val() / 100);

                $('#FINW_SI_FC').val(ShareSIFC);
                $('#FINW_SI_BC').val(ShareSIBC);
                $('#FINW_PREM_FC').val(SharePremFC);
                $('#FINW_PREM_BC').val(SharePremBC);
                $('#FINW_COMM_FC').val(CommPercFC);
                $('#FINW_COMM_BC').val(CommPercBC);
            }
        };


        /*-----------------------------------
        * Fac Outward Calculations
        *----------------------------------*/
        document.getElementById("FOTW_SHARE_PERC").addEventListener("focusout", FacOutwardCal);
        document.getElementById("FOTW_RI_COMM").addEventListener("focusout", FacOutwardCal);

        function FacOutwardCal() {
            var SharePremFC = "";
            var SharePremBC = "";
            var ShareSIFC = "";
            var ShareSIBC = "";
            var MemberSI = "";
            var MemberPrem = "";
            //var CommPercFC = "";
            //var CommPercBC = "";           

            if ($('#FOTW_SHARE_PERC').val == "" || $('#FOTW_MEM_SHARE_PERC').val == "") {
                u.growl_warning("FAC Share % and Commission % is null! ");
            }
            else {
                $('#FOTW_MEM_SHARE_PERC').val(100 - $('#FOTW_SHARE_PERC').val());

                ShareSIFC = ($('#FOTW_SHARE_PERC').val() / 100 * $('#FOTW_SHARE_SI_FC').val());
                ShareSIBC = ($('#FOTW_SHARE_PERC').val() / 100 * $('#FOTW_SHARE_SI_BC').val());

                SharePremFC = ($('#FOTW_SHARE_PERC').val() / 100 * $('#FOTW_SHARE_PREM_FC').val());
                SharePremBC = ($('#FOTW_SHARE_PERC').val() / 100 * $('#FOTW_SHARE_PREM_BC').val());

                MemberSI = ($('#FOTW_RI_PERC').val() / 100 * $('#FOTW_MEM_SI_FC').val());
                MemberPrem = ($('#FOTW_RI_PERC').val() / 100 * $('#FOTW_MEM_PREM_FC').val());

                //CommPercFC = ($('#FINW_COMM_PERC').val() * $('#FINW_ORIG_PREM_FC').val() / 100);
                //CommPercBC = ($('#FINW_COMM_PERC').val() * $('#FINW_ORIG_PREM_BC').val() / 100);

                $('#FOTW_MEM_SI_FC').val(ShareSIFC);
                $('#FOTW_MEM_SI_BC').val(ShareSIBC);
                $('#FOTW_MEM_PREM_FC').val(SharePremFC);
                $('#FOTW_MEM_PREM_BC').val(SharePremBC);
                $('#FOTW_RI_SHARE_SI').val(MemberSI);
                $('#FOTW_RI_SHARE_PREM').val(MemberPrem);
                //$('#FINW_COMM_FC').val(CommPercFC);
                //$('#FINW_COMM_BC').val(CommPercBC);

                $('#FOTW_RI_SHARE_COMM').val($('#FOTW_RI_COMM').val());
            }
        };


        /*--------------------------------------------------
       * Add function to add records to  FAC Inward
       *------------------------------------------------*/
        //
        $("#btn_add_MemberInward").on("click", function () {

            if (u.form_validation("#facInwardForm")) {

                //    $("#FINW_SYS_ID").val("");

                //    if ($("#FINW_SYS_ID").val() == "") {
                //        RetnSequenceNo("INS_RI_FAC_INWARD_SEQ", getVehSeqNo);

                //        function getVehSeqNo(data) {
                //            $("#FINW_SYS_ID").val(data);
                //        }
                //    }

                u.modal_confirmation("Are you sure you want to add RI FAC Inward Details to the grid?", function () {

                    var rowIds = $scope.grdfacInward_grid.jqGrid("getDataIDs");

                    /*----------------------------------------------
                     * declare array to contain the codes to verify
                     *--------------------------------------------*/
                    //
                    var code = [];

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
                        var cellValue = $scope.grdfacInward_grid.jqGrid("getCell", currRow, "FINW_CEDANT_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#FINW_CEDANT_CODE").val(), code) < 0) {
                        var formData = u.parse_form("#facInwardForm");
                        formData.FINW_STATUS = "U";
                        formData.FINW_CRTE_BY = "Admin";
                        formData.FINW_CRTE_DATE = u.get_date();
                        $scope.grdfacInward_grid.addRowData(formData.FINW_CEDANT_CODE, formData);
                        u.hide_confirm();
                        u.growl_success("RI FAC Inward Details successfully added to grid");
                    }

                    else {
                        u.hide_confirm();
                        u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                    }

                });
            }
            else {
                u.growl_error("Please fill out the fields that are marked red");
            }


        });


        /*--------------------------------
       * FAC Inward Edit/Update Function
       *------------------------------*/
        //
        $("#btn_update_MemberInward").on("click", function () {

            if (u.grid_empty($scope.grdfacInward_grid)) return u.growl_info("FAC Inward grid is empty");

            if (u.form_validation("#facInwardForm")) {

                u.modal_confirmation("Are you sure you want to update the selected FAC Inward?", function () {

                    var grid = $scope.grdfacInward_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "FINW_CEDANT_CODE");

                    if (code === $("#FINW_CEDANT_CODE").val()) {
                        var data = u.parse_form("#facInwardForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("FAC Inward updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*----------------------------------------------------
        * Remove record or Mark for deletion from FAC Inward Grid
        *---------------------------------------------------*/

        $("#btn_remove_MemberInward").on("click", function () {

            if (u.grid_empty($scope.grdfacInward_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.grdfacInward_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "FINW_STATUS");

            var code = grid.jqGrid("getCell", rowId, "FINW_CEDANT_CODE");

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

                    grid.jqGrid("delRowData", rowId);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid("setCell", rowId, "FINW_STATUS", "D");
                    $("#" + rowId, "#grdfacInward").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#grdfacInward").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "FINW_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });



        /*--------------------------------------------------
         * Add function to add records to  FAC Inward Companies
         *------------------------------------------------*/
        //
        $("#btn_add_facInwardComp").on("click", function () {

            if (u.form_validation("#InwardParticipantsForm")) {

                u.modal_confirmation("Are you sure you want to add RI FAC Inward Company Details to the grid?", function () {

                    var rowIds = $scope.grdInwdParticipant_grid.jqGrid("getDataIDs");

                    /*----------------------------------------------
                     * declare array to contain the codes to verify
                     *--------------------------------------------*/
                    //
                    var code = [];

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
                        var cellValue = $scope.grdInwdParticipant_grid.jqGrid("getCell", currRow, "FINW_PAP_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#FINW_PAP_CODE").val(), code) < 0) {
                        var formData = u.parse_form("#InwardParticipantsForm");
                        formData.FINW_PAP_STATUS = "U";
                        formData.FINW_PAP_CRTE_BY = "Admin";
                        formData.FINW_PAP_CRTE_DATE = u.get_date();
                        $scope.grdInwdParticipant_grid.addRowData(formData.FINW_PAP_CODE, formData);
                        u.hide_confirm();
                        u.growl_success("RI FAC Inward Company Details successfully added to grid");
                    }

                    else {
                        u.hide_confirm();
                        u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                    }

                });
            }
            else {
                u.growl_error("Please fill out the fields that are marked red");
            }


        });


        /*--------------------------------
        * FAC Inward Companies Edit/Update Function
        *------------------------------*/
        //
        $("#btn_update_facInwardComp").on("click", function () {

            if (u.grid_empty($scope.grdInwdParticipant_grid)) return u.growl_info("FAC Inward Company grid is empty");

            if (u.form_validation("#facInwardForm")) {

                u.modal_confirmation("Are you sure you want to update the selected FAC Inward Company?", function () {

                    var grid = $scope.grdInwdParticipant_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "FINW_PAP_CODE");

                    if (code === $("#FINW_PAP_CODE").val()) {
                        var data = u.parse_form("#InwardParticipantsForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("FAC Inward Company updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*----------------------------------------------------
      * Remove record or Mark for deletion from FAC Inward Company Grid
      *---------------------------------------------------*/

        $("#btn_remove_facInwardComp").on("click", function () {

            if (u.grid_empty($scope.grdInwdParticipant_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.grdInwdParticipant_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "FINW_PAP_STATUS");

            var code = grid.jqGrid("getCell", rowId, "FINW_PAP_CODE");

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

                    grid.jqGrid("delRowData", rowId);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid("setCell", rowId, "FINW_PAP_STATUS", "D");
                    $("#" + rowId, "#grdInwdParticipants").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#grdInwdParticipants").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "FINW_PAP_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });



        /*--------------------------------------------------
      * Add function to add records to  Co-Insurance Leader
      *------------------------------------------------*/
        //
        $("#btn_add_CoinsLeader").on("click", function () {

            if (u.form_validation("#CoinsLeaderForm")) {

                u.modal_confirmation("Are you sure you want to add RI Co-Insurance Leader to the grid?", function () {

                    var rowIds = $scope.grdCoinsLeader_grid.jqGrid("getDataIDs");

                    /*----------------------------------------------
                     * declare array to contain the codes to verify
                     *--------------------------------------------*/
                    //
                    var code = [];

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
                        var cellValue = $scope.grdCoinsLeader_grid.jqGrid("getCell", currRow, "FOTW_RI_MEM_CODE");

                        code.push(cellValue);
                    }

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray($("#FOTW_RI_MEM_CODE").val(), code) < 0) {
                        var formData = u.parse_form("#CoinsLeaderForm");
                        formData.FOTW_STATUS = "U";
                        formData.FOTW_CRTE_BY = "Admin";
                        formData.FOTW_CRTE_DATE = u.get_date();
                        $scope.grdCoinsLeader_grid.addRowData(formData.FOTW_RI_MEM_CODE, formData);
                        u.hide_confirm();
                        u.growl_success("Co-Insurance Leader Details successfully added to grid");
                    }

                    else {
                        u.hide_confirm();
                        u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                    }

                });
            }
            else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });


        /*--------------------------------
        * Co-Insurance Leader Edit/Update Function
        *------------------------------*/
        //
        $("#btn_update_CoinsLeader").on("click", function () {

            if (u.grid_empty($scope.grdCoinsLeader_grid)) return u.growl_info("Co-Insurance Leader grid is empty");

            if (u.form_validation("#CoinsLeaderForm")) {

                u.modal_confirmation("Are you sure you want to update the selected Co-Insurance Leader?", function () {

                    var grid = $scope.grdCoinsLeader_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "FOTW_RI_MEM_CODE");

                    if (code === $("#FOTW_RI_MEM_CODE").val()) {
                        var data = u.parse_form("#CoinsLeaderForm");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("FAC Inward updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*----------------------------------------------------
       * Remove record or Mark for deletion from Co-Insurance Leader Grid
       *---------------------------------------------------*/

        $("#btn_remove_CoinsLeader").on("click", function () {

            if (u.grid_empty($scope.grdCoinsLeader_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.grdCoinsLeader_grid;

            var rowId = grid.jqGrid("getGridParam", "selrow");

            var recordStatus = grid.jqGrid("getCell", rowId, "FOTW_STATUS");

            var code = grid.jqGrid("getCell", rowId, "FOTW_RI_MEM_CODE");

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

                    grid.jqGrid("delRowData", rowId);
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully deleted");
                }

                /*----------------------------------------
                 * Mark a record for deletion on saving
                 *--------------------------------------*/
                // 
                if (recordStatus == "A") {

                    grid.jqGrid("setCell", rowId, "FOTW_STATUS", "D");
                    $("#" + rowId, "#grdCoinsLeader").css({ color: "red" });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $("#" + rowId, "#grdCoinsLeader").css({ color: "black" });
                    grid.jqGrid("setCell", rowId, "FOTW_STATUS", "A");
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


    });

})(window.$, window.service, window.utility, {})

