(function ($, s, u, $scope) {
    $(function () {

        $scope.riskdtls_grid = u.default_grid("#grdRiskDtls", "#grdRiskDtlsPager", "Claim Risk List",
       ['Vehicle Reg No.', 'Chasis No', 'Engine No.', 'Vehicle No.', ' Vehicle Type', 'Model', 'Status', 'Created By', 'Created Date', 'ID', 'Claim ID'],
       [
          { name: 'CLM_RISK_VEH_REG_NO', id: false, index: 'CLM_RISK_VEH_REG_NO' },
          { name: 'CLM_RISK_CHASIS_NO', id: false, index: 'CLM_RISK_CHASIS_NO' },
          { name: 'CLM_RISK_ENG_NO', id: false, index: 'CLM_RISK_ENG_NO', width: 150 },
          { name: 'CLM_RISK_VEH_NO', index: 'CLM_RISK_VEH_NO', width: 200 },
          { name: 'CLM_RISK_VEH_TYPE', index: 'CLM_RISK_VEH_TYPE' },
          { name: 'CLM_RISK_MAKE_MODEL', index: 'CLM_RISK_MAKE_MODEL' },
          { name: 'CLM_RISK_STATUS', index: 'CLM_RISK_STATUS' },
          { name: 'CLM_RISK_CRTE_BY', index: 'CLM_RISK_CRTE_BY' },
          { name: 'CLM_RISK_CRTE_DATE', index: 'CLM_RISK_CRTE_DATE' },
          { name: 'CLM_RISK_SYS_ID', id: true, hidden: true, index: 'CLM_RISK_SYS_ID' },
          { name: 'CLM_RISK_CLM_SYS_ID', id: true, hidden: true, index: 'CLM_RISK_CLM_SYS_ID' },
       ],
      //Retrive Grid data into form input fields on row click..
      function (sel_id) {

      }),



        //Loss Claims settlement ..
        $scope.lossSetment_grid = u.default_grid("#grdEstimatesDtls", "#grdEstimatesDtlsPager", "Claim Estimate Details List",
        ['Loss Code', 'Loss Type', 'Estimate Amount', 'Settled Amount', 'OS Amount', 'Status', 'Created By', 'Created Date', 'ID', 'Claim ID'],
       [
          { name: 'CLM_EST_TYPE', id: true, index: 'CLM_EST_TYPE' },
          { name: 'CLM_EST_NAME', index: 'CLM_EST_NAME', width: 200 },
          { name: 'CLM_EST_AMT', index: 'CLM_EST_AMT', width: 150 },
          { name: 'CLM_EST_SETTLED_AMT', index: 'CLM_EST_SETTLED_AMT', width: 150 },
          { name: 'CLM_EST_OS_AMT', index: 'CLM_EST_OS_AMT', width: 150 },
          { name: 'CLM_EST_STATUS', index: 'CLM_EST_STATUS' },
          { name: 'CLM_EST_CRTE_BY', index: 'CLM_EST_CRTE_BY' },
          { name: 'CLM_EST_CRTE_DATE', index: 'CLM_EST_CRTE_DATE' },
          { name: 'CLM_EST_SYS_ID', id: false, hidden: true, index: 'CLM_EST_SYS_ID' },
          { name: 'CLM_EST_CLM_SYS_ID', id: false, hidden: true, index: 'CLM_EST_CLM_SYS_ID' }
       ],
      //Retrive Grid data into form input fields on row click..
      function (sel_id) {
          var grid = $scope.lossSetment_grid;
          var sel_id = grid.jqGrid('getGridParam', 'selrow');
          $("form input[name='CLM_EST_TYPE']").data("update", true);
          u.fill_form({
              CLPMT_CLM_TYPE: grid.jqGrid('getCell', sel_id, 'CLM_EST_TYPE'),
          }, "#clmSettledForm1");
      });

        // Claims Expense/Fees settlement ..
        $scope.expseSetment_grid = u.default_grid("#grdExpseSetment", "#grdExpseSetmentPager", "Claim Estimate",
           ['Code', 'Expense type', 'Expense Cost', 'Loss Code', 'Loss Type', 'Estimate Amount', ' Settled Amount', ' OS Amount', 'Status', 'Created By', 'Created Date', 'ID', 'Claim ID'],
            [
            { name: 'CLM_EXP_CODE', id: true, index: 'CLM_EXP_CODE' },
            { name: 'CLM_EXP_CLM_EST_TYPE', index: 'CLM_EXP_CLM_EST_TYPE', width: 200 },
            { name: 'CLM_EXP_COST', id: true, index: 'CLM_EXP_COST' },
            { name: 'CLM_LOSS_CODE', id: true, index: 'CLM_LOSS_CODE' },
            { name: 'CLM_LOSS_TYPE', index: 'CLM_LOSS_TYPE', width: 200 },
            { name: 'CLM_EST_AMT', index: 'CLM_EST_AMT', width: 150 },
            { name: 'CLM_EST_SETTLED_AMT', index: 'CLM_EST_SETTLED_AMT', width: 150 },
            { name: 'CLM_EST_OS_AMT', index: 'CLM_EST_OS_AMT', width: 150 },
            { name: 'CLM_EXP_STATUS', index: 'CLM_EXP_STATUS' },
            { name: 'CLM_EXP_CRTE_BY', index: 'CLM_EXP_CRTE_BY' },
            { name: 'CLM_EXP_CRTE_DATE', index: 'CLM_EST_CRTE_DATE' },
            { name: 'CLM_EXP_SYS_ID', id: false, hidden: true, index: 'CLM_EXP_SYS_ID' },
            { name: 'CLM_EXP_CLM_EST_SYS_ID', id: false, hidden: true, index: 'CLM_EXP_CLM_EST_SYS_ID' }
            ],
                //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.expseSetment_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='CLM_EXP_CODE']").data("update", true);
                u.fill_form({
                    CLPMT_CLM_EXP_TYPE: grid.jqGrid('getCell', sel_id, 'CLM_EXP_CLM_EST_TYPE'),

                }, "#clmSettledForm1");
            });


        //Claim Estimation Settled
         $scope.clmSettled_grid = u.default_grid("#grdClmLossSettled", "#grdClmLossSettledPager", "Claim Expense Details List",
          ['Claim No', 'ID', 'Reg ID', 'Risk ID', 'Polh ID', 'Estimate Code', 'Expense Code', 'Settled Type', 'Ex Gratia', 'Total Loss', 'Settled Option', 'Payment Type',
           'Payment To', 'Payee ID', 'Payee Name', 'Cheque Name', 'Currency', 'Currency Rate', 'Ammount FC', 'Ammount BC', 'Excess FC', 'Excess BC', 'Tax FC', 'Tax BC',
           'Net FC', 'Net BC','Claim Office','Policy Office', 'Narration', 'Txn Type','Status','Create By','Create Date'],
            [
            { name: 'CLPMT_CLAIM_NO', id: true, index: 'CLPMT_CLAIM_NO', width: 150 },
            { name: 'CLPMT_SYS_ID', id: true, index: 'CLPMT_SYS_ID', width: 150 },
            { name: 'CLPMT_CLM_REG_SYS_ID', index: 'CLPMT_CLM_REG_SYS_ID' },
            { name: 'CLPMT_RISK_SYS_ID', index: 'CLPMT_RISK_SYS_ID', width: 150 },
            { name: 'CLPMT_POLH_SYS_ID', index: 'CLPMT_POLH_SYS_ID' },
            { name: 'CLPMT_CLM_TYPE', index: 'CLPMT_CLM_TYPE' },
            { name: 'CLPMT_CLM_EXP_TYPE', index: 'CLPMT_CLM_EXP_TYPE' },
            { name: 'CLPMT_STLMNT_TYPE', index: 'CLPMT_STLMNT_TYPE' },
            { name: 'CLPMT_EX_GRATIA', index: 'CLPMT_EX_GRATIA' },
            { name: 'CLPMT_TOTAL_LOSS', index: 'CLPMT_TOTAL_LOSS' },
            { name: 'CLPMT_STLMNT_OPTION', index: 'CLPMT_STLMNT_OPTION' },
            { name: 'CLPMT_PAY_TYPE', id: false, index: 'CLPMT_PAY_TYPE' },
            { name: 'CLPMT_PAY_TO', id: false, index: 'CLPMT_PAY_TO' },
            { name: 'CLPMT_PAYEE_ID', id: true, index: 'CLPMT_PAYEE_ID', width: 150 },
            { name: 'CLPMT_PAYEE_NAME', index: 'CLPMT_PAYEE_NAME' },
            { name: 'CLPMT_CHQ_NAME', index: 'CLPMT_CHQ_NAME' },
            { name: 'CLPMT_CURRENCY', index: 'CLPMT_CURRENCY', width: 150 },
            { name: 'CLPMT_CURR_RATE', index: 'CLPMT_CURR_RATE' },
            { name: 'CLPMT_CLM_AMT_FC', index: 'CLPMT_CLM_AMT_FC' },
            { name: 'CLPMT_CLM_AMT_BC', index: 'CLPMT_CLM_AMT_BC' },
            { name: 'CLPMT_DED_FC', index: 'CLPMT_DED_FC' },
            { name: 'CLPMT_DED_BC', index: 'CLPMT_DED_BC' }, 
            { name: 'CLPMT_TAX_FC', id: false, index: 'CLPMT_TAX_FC' },
            { name: 'CLPMT_TAX_BC', id: false, index: 'CLPMT_TAX_BC' },
            { name: 'CLPMT_NET_CLM_FC', id: false, index: 'CLPMT_NET_CLM_FC' },
            { name: 'CLPMT_NET_CLM_BC', id: false, index: 'CLPMT_NET_CLM_BC' },
            { name: 'CLPMT_CLM_OFFICE', id: false, index: 'CLPMT_CLM_OFFICE' },
            { name: 'CLPMT_POL_OFFICE', id: false, index: 'CLPMT_POL_OFFICE' },
            { name: 'CLPMT_CLM_NARRATION', id: false, index: 'CLPMT_CLM_NARRATION' },
            { name: 'CLPMT_TXN_TYPE', id: false, index: 'CLPMT_TXN_TYPE' },
            { name: 'CLPMT_STATUS', id: false, index: 'CLPMT_STATUS' },
            { name: 'CLPMT_CRTE_BY', id: false, index: 'CLPMT_CRTE_BY' },
            { name: 'CLPMT_CRTE_DATE', id: false, index: 'CLPMT_CRTE_DATE' }
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.clmSettled_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow'); 
                $("form input[name='CLM_EST_TYPE']").data("update", true);
                u.fill_form({
                    CLPMT_STLMNT_TYPE: grid.jqGrid('getCell', sel_id, 'CLPMT_STLMNT_TYPE'),
                    CLPMT_EX_GRATIA: grid.jqGrid('getCell', sel_id, 'CLPMT_EX_GRATIA'),
                    CLPMT_TOTAL_LOSS: grid.jqGrid('getCell', sel_id, 'CLPMT_TOTAL_LOSS'), 
                    CLPMT_PAY_TYPE: grid.jqGrid('getCell', sel_id, 'CLPMT_PAY_TYPE'),
                    CLPMT_PAY_TO: grid.jqGrid('getCell', sel_id, 'CLPMT_PAY_TO'),
                    CLPMT_PAYEE_ID: grid.jqGrid('getCell', sel_id, 'CLPMT_PAYEE_ID'),
                    CLPMT_PAYEE_NAME: grid.jqGrid('getCell', sel_id, 'CLPMT_PAYEE_NAME'),
                    CLPMT_CHQ_NAME: grid.jqGrid('getCell', sel_id, 'CLPMT_CHQ_NAME'),
                    CLPMT_CURRENCY: grid.jqGrid('getCell', sel_id, 'CLPMT_CURRENCY'),
                    CLPMT_CURR_RATE: grid.jqGrid('getCell', sel_id, 'CLPMT_CURR_RATE'),
                    CLPMT_CLM_AMT_FC: grid.jqGrid('getCell', sel_id, 'CLPMT_CLM_AMT_FC'),
                    CLPMT_DED_FC: grid.jqGrid('getCell', sel_id, 'CLPMT_DED_FC'),
                    CLPMT_TAX_FC: grid.jqGrid('getCell', sel_id, 'CLPMT_TAX_FC'),
                    CLPMT_NET_CLM_FC: grid.jqGrid('getCell', sel_id, 'CLPMT_NET_CLM_FC'),
                    CLPMT_CLM_NARRATION: grid.jqGrid('getCell', sel_id, 'CLPMT_CLM_NARRATION'),

                }, "#clmSettledForm1");
            }),


        // Claim Summ Grid
              $scope.clm_Summary_grid = u.default_grid("#gridClm_Summary", "#gridClm_SummaryPager", "Claim Settled Summary",
          ['Policy ID', 'Policy Display No', 'Class of Business', 'Sub class', 'Cust Code'],
          [
              { name: 'POLH_SYS_ID', index: 'POLH_SYS_ID', width: 150 },
              { name: 'POLH_DISPLAY_NO', index: 'POLH_DISPLAY_NO', width: 150 },
              { name: 'POLH_CLASS_CODE', index: 'POLH_CLASS_CODE', width: 150 },
              { name: 'POLH_SUB_CLASS_CODE', index: 'POLH_SUB_CLASS_CODE', width: 150 },
              { name: 'POLH_CUST_CODE', index: 'POLH_CUST_CODE', width: 150 },
          ],
           //Retrive Grid data into form input fields on row click..
          function (sel_id) {

              var grid = $scope.clm_Summary_grid;
              var sel_id = grid.jqGrid('getGridParam', 'selrow');
              $("form input[name='POLH_SYS_ID']").data("update", true);
              u.fill_form({
                  CLM_CLT_CODE: grid.jqGrid('getCell', sel_id, 'POLH_CUST_CODE'),
                  CLM_POLH_SYS_ID: grid.jqGrid('getCell', sel_id, 'POLH_SYS_ID'),
              }, "#clmEstimateForm");

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
                    CLPMT_PAYEE_ID: grid.jqGrid('getCell', sel_id, 'CUS_CODE'),
                    CLPMT_PAYEE_NAME: grid.jqGrid('getCell', sel_id, 'CUS_OFFICIAL_NAME'),
                }, "#clmSettledForm1");
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

   $scope.saving = false;


        $("#btn_Polh_lov").on('click', function () {

            $("#policyLovModal").modal();

        });


        /*---------------------------
         * Search Estimation
         *-------------------------*/
        $("#btnQueryPolh").click(function () {
            var queryTxt = $("#txtPolhSearch").val();
            if (queryTxt != null && queryTxt.length > 0) {
                s.search_policys_est(queryTxt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.clmdtls_grid.jqGrid("clearGridData");
                        for (var i in result) {
                            $scope.clmdtls_grid.addRowData(result[i].POLH_SYS_ID, result[i])
                        }
                    },
                    function (err) {

                    })
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.clmdtls_grid.jqGrid("clearGridData");

                //fetch all
                s.get_policys_est(function (polhs) {
                    for (var i in polhs) {
                        $scope.clmdtls_grid.addRowData(polhs[i].POLH_SYS_ID, polhs[i]);
                    }
                })
            }

        })


        /*--------------------------------------------------
        *get Risks lists fucnction
        *------------------------------------------------*/
        //
        function getRiskLov() {

            /*
                obtain parameter for our request
            */
            var RisksData = {

                CLM_EST_RISK: $("#CLM_POLH_SYS_ID").val(),
            }

            //
            var grid = $scope.polrisk_grid;

            var rowIds = grid.jqGrid('getDataIDs');

            //send parameters and get motor Risks from the database
            s.getRisksLOV(RisksData, function (result) {
                if (result && result.length && result.length > 0) {

                    //clear Grid
                    $scope.polrisk_grid.jqGrid('clearGridData');
                    //fill grid
                    for (var i in result) {

                        $scope.polrisk_grid.addRowData(result[i]["LINT_SYS_ID"], result[i]);
                    }
                }
            });
        }


        $scope.getClientLov = function () {

            /*
                obtain parameter for our request
            */
            var ClientsData = {

                CUST_CODE: $("#POLH_CUST_CODE").val(),
            }


            //send parameters and get motor Risks from the database
            s.getClientsLOV(ClientsData, function (result) {
                if (result && result.length && result.length > 0) {

                    for (var i in result) {
                        $("#CLM_CLT_NAME").val(result[i]["CUS_OFFICIAL_NAME"], result[i]);
                    }
                }
            });
        }


        /*--------------------------------------------------
           * call add function to add records to  estDtls_grid
           *------------------------------------------------*/
        //
        $("#btn_Risk_Detail").click(function () {
            if (u.form_validation("#clmEstimateForm")) {
                u.clear_grid_data($scope.polrisk_grid);
                getRiskLov();
                $("#ClaimRiskDetailskModal").modal();
            }
            else {
                u.growl_warning("Please fill the Claim Header form and try again");
            };
            //u.clear_grid_data($scope.polrisk_grid);
            //getRiskLov();
            //getClientLov();
            //$("#ClaimRiskDetailskModal").modal();
        });



        $("#btn_Risk_Onclose").click(function () {

            if (u.grid_empty($scope.riskdtls_grid)) {
                u.modal_confirmation("The Grid is empty, do you want to close form?", function (e) {
                    $("#ClaimRiskDetailskModal").modal("hide");
                    u.hide_confirm();
                });
            }
            else {
                $("#ClaimRiskDetailskModal").modal("hide");
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
                case "btn_office":
                    $scope.lov.call_dialog("Select Office", "get_office_lov", $scope.dialog_data);
                    break;
                case "btn_currency":
                    $scope.lov.call_dialog("Select Currency", "get_lov_currency", $scope.dialog_data);
                    break;
                case "btn_customers":
                    $scope.lov.call_dialog("Select Customer", "get_lov_customer", $scope.dialog_data);
                    break;
                case "btn_expense":
                    $scope.lov.call_dialog("Select Customer Category", "get_expense_lov", $scope.dialog_data);
                    break;
                case "btn_catastrophy":
                    $scope.lov.call_dialog("Select Claim Catastrophy", "get_catastrophy_lov", $scope.dialog_data);
                    break;
                case "btn_loss":
                    $scope.lov.call_dialog("Select Claim Cause of Loss", "get_loss_lov", $scope.dialog_data);
                    break;
                case "btn_est_type":
                    $scope.lov.call_dialog("Select Claim Estimate Type", "get_estimation_lov", $scope.dialog_data);
                    break;
                case "btn_claim_no":
                    $scope.lov.call_dialog("Select Claim No.", "get_claim_lov", $scope.dialog_data);
                    break;

            }
        })
        //////////////////////////////////

        $("#btn_CustomersLov").on('click', function () {

            $("#customerLovModal").modal();

        });


        /*---------------------------
         * Search Customers
         *-------------------------*/
        //
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
        ///////////////////////

        // Claim Search Dialog
        $scope.clmdtls_grid = u.default_grid("#gridClmDtls", "#gridClmDtlsPager", "Claim Search Results",
        ['Claim No.', 'Claim ID', 'Policy ID', 'Office Code', 'Loss Date', 'Discovery Date', 'Reported Date', 'Transaction Date', 'Loss Code',
            'Place of Loss', 'Client Code', 'Client Name', 'Event Code', 'Time bared', 'Warranty Breached', 'Repudent','index'
        ],
        [
            { name: 'CLM_N0', index: 'CLM_N0', width: 150 },
            { name: 'CLM_SYS_ID', index: 'CLM_SYS_ID', width: 150 },
            { name: 'CLM_POLH_SYS_ID', index: 'CLM_POLH_SYS_ID', width: 150 },
            { name: 'CLM_OFF_CODE', index: 'CLM_OFF_CODE', width: 150 },
            { name: 'CLM_LOSS_DATE', index: 'CLM_LOSS_DATE', width: 150 },
            { name: 'CLM_DISC_DATE', index: 'CLM_DISC_DATE', width: 150 },
            { name: 'CLM_REP_DATE', index: 'CLM_REP_DATE', width: 150 },
            { name: 'CLM_TXN_DATE', index: 'CLM_TXN_DATE', width: 150 },
            { name: 'CLM_LOSS_CODE', index: 'CLM_LOSS_CODE', width: 150 },
            { name: 'CLM_LOSS_PLACE', index: 'CLM_LOSS_PLACE', width: 150 },
            { name: 'CLM_CLT_CODE', index: 'CLM_CLT_CODE', width: 150 },
            { name: 'CLM_CLT_NAME', index: 'CLM_CLT_NAME', width: 150 },
            { name: 'CLM_CAT_EVNT_CODE', index: 'CLM_CAT_EVNT_CODE', width: 150 },
            { name: 'CLM_TIME_BRD', index: 'CLM_TIME_BRD', width: 150 },
            { name: 'CLM_WART_BRCH', index: 'CLM_WART_BRCH', width: 150 },
            { name: 'CLM_RPDT', index: 'CLM_RPDT', width: 150 },
            { name: "index", id: true, index: "index", hidden: true }
        ],
        function (index) {
            $scope.selected_index = index;
            $scope.search_fill($scope.result[index]);
        },
        function (index) {
            $scope.search_fill($scope.result[index]);
            u.clear_grid_data($scope.clmdtls_grid);
            $("#claimLovModal").modal("hide");
        });



         /*---------------------------
         * Search Claim Details
         *-------------------------*/
        $("#btnQueryClmDtls").click(function () {
            var query = $("#txtClmNoSearch").val();
            if (query && query.length > 0 && query !== " ") {
                s.search_estimation(query, function (result) { 
                    $scope.searched = true;
                    $scope.result = result;
                    if (result.length > 0) {
                        if (result.length > 1) {
                            u.clear_grid_data($scope.clmdtls_grid);
                            /*display result of the search to the user in a modal*/
                            for (var i in result) {
                                //u.clear_grid_data($scope.search_grid);
                                result[i].index = i;
                                $scope.clmdtls_grid.addRowData(result[i].index, result[i]);
                            }
                            //$("#mySearchResultModal").modal();
                        } else {

                            $scope.search_fill(result[0]);
                        }
                    } else {
                        u.growl_info("Claim No. not found, please make sure you enter the correct Policy No!");
                    }
                },
                    function (err) {
                        u.growl_error("Error fetching search results");
                    })
            } else {
                u.growl_info("Please check Claim No. and try again!");
            }
        });

        $scope.search_fill = function (product) {

            $scope.riskdtls_grid.jqGrid("clearGridData");
            $scope.lossSetment_grid.jqGrid("clearGridData");
            $scope.expseSetment_grid.jqGrid("clearGridData");

            u.fill_form(product, "#clmEstimateForm");

            //populating child entities
            u.clear_grid_data($scope.riskdtls_grid);
            for (var i in product.CLM_EST_RISK_DTLS) {
                $scope.riskdtls_grid.addRowData(product.CLM_EST_RISK_DTLS[i].CLM_RISK_SYS_ID, product.CLM_EST_RISK_DTLS[i]);
            }
            //populating child entities
            u.clear_grid_data($scope.lossSetment_grid);
            for (var i in product.CLM_EST_DTLS) {
                $scope.lossSetment_grid.addRowData(product.CLM_EST_DTLS[i].CLM_EST_SYS_ID, product.CLM_EST_DTLS[i]);

                // u.clear_grid_data($scope.Covers_grid);
                for (var X in product.CLM_EST_DTLS[i].CLM_EST_EXPENSE) {
                    $scope.expseSetment_grid.addRowData(product.CLM_EST_DTLS[i].CLM_EST_EXPENSE[X].CLM_EXP_SYS_ID, product.CLM_EST_DTLS[i].CLM_EST_EXPENSE[X])
                }
            }

        };




        $("#btnClaimNo").on('click', function () {

            $("#claimLovModal").modal();

        });


        /*----------------------------------------------------
         * Add record to the Grid
         *---------------------------------------------------*/
        //
        $("#btn_add_est_settle").on('click', function () {

            if (u.form_validation("#clmSettledForm1")) {              

                u.modal_confirmation("Are you sure you want to add Settlement to the grid?", function () {

                    var rowIds = $scope.clmSettled_grid.jqGrid('getDataIDs');

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
                        var estValue = $scope.clmSettled_grid.jqGrid('getCell', currRow, 'CLPMT_CLM_TYPE');

                        var expValue = $scope.clmSettled_grid.jqGrid('getCell', currRow, 'CLPMT_CLM_EXP_TYPE');

                        var cellValue = estValue + expValue;

                        Code.push(cellValue);
                    }

                    var estCode = $("#CLPMT_CLM_TYPE").val();

                    var expCode = $("#CLPMT_CLM_EXP_TYPE").val();

                    var verifyLossExp = estCode + expCode;

                    /*----------------------------------------
                     * add if code is not found in the Grid
                     *--------------------------------------*/
                    //
                    if ($.inArray(verifyLossExp, Code) < 0) {

                        var FormData = u.parse_form("#clmSettledForm1");
                        FormData.CLPMT_STATUS = "U";
                        FormData.CLPMT_CRTE_BY = "Admin";
                        FormData.CLPMT_CRTE_DATE = u.get_date();
                        $scope.clmSettled_grid.addRowData(FormData.CLPMT_CLM_TYPE, FormData); 
                        u.hide_confirm();
                        u.growl_success("Claim Settlement Details successfully added to grid");
                    }

                    else {
                        u.hide_confirm();
                        u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
                    }

                })
            } else {
                u.growl_error("Please fill out the fields that are marked red");
            }
        });



        /*----------------------------------------------------
         * Remove record or Mark for deletion from the Grid
         *---------------------------------------------------*/
         //
        $("#btn_remove_est_settle").on('click', function () {

            if (u.grid_empty($scope.clmSettled_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.clmSettled_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'CLPMT_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'CLPMT_CLM_TYPE');

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

                    grid.jqGrid('setCell', row_id, 'CLPMT_STATUS', 'D');
                    $('#' + row_id, '#grdClmLossSettled').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdClmLossSettled').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'CLPMT_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_est_settle").on('click', function () {

            if (u.grid_empty($scope.clmSettled_grid)) return u.growl_info("Claim Settlement grid is empty");

            if (u.form_validation("#clmSettledForm1")) {

                u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                    var grid = $scope.clmSettled_grid;

                    var rowId = grid.jqGrid("getGridParam", "selrow");

                    var code = grid.jqGrid("getCell", rowId, "CLPMT_CLM_TYPE");

                    if (code === $("input[name='CLPMT_CLM_TYPE']").val()) {
                        var data = u.parse_form("#clmSettledForm1");
                        for (var i in data) {
                            grid.jqGrid("setCell", rowId, i, data[i]);
                        }
                        u.hide_confirm();
                        u.growl_success("Claim Settlement updated");
                    } else {
                        u.hide_confirm();
                        u.growl_warning("Please select the correct row to edit");
                    }
                });
            }

        });


        /*--------------------------------------------------
           * call add function to add records to Claim Expense
           *------------------------------------------------*/
        //
        $("#btn_Loss_Settlement").click(function () {

            if (!u.form_validation("#clmEstimateForm")) {
                return u.growl_warning("Please fill the fields that are marked red!");
            }
           
            if (u.grid_empty($scope.lossSetment_grid)) {
                return u.growl_warning("Estimate grid is empty!");
            }

            var grid = $scope.lossSetment_grid;
            var sel_id = grid.jqGrid('getGridParam', 'selrow');
            var RiskID = grid.jqGrid('getCell', sel_id, 'CLM_EST_TYPE');
            if (RiskID == $("#CLPMT_CLM_TYPE").val()) {
                //Hide covers not related to selected risk
                $scope.hideShowEsts();

                $("#CLPMT_CLAIM_NO").val($("#CLM_N0").val());
                $("#CLPMT_POLH_SYS_ID").val($("#CLM_POLH_SYS_ID").val());
                $("#CLPMT_RISK_SYS_ID").val($("#").val());
                $("#CLPMT_CLM_REG_SYS_ID").val($("#CLM_SYS_ID").val());
                $("#CLPMT_CLM_OFFICE").val($("#CLPMT_CLM_OFFICE1").val());
                $("#CLPMT_POL_OFFICE").val($("#CLM_OFF_CODE").val());
                $("#CLPMT_TXN_TYPE").val('L');
                $("#CLPMT_CLM_EXP_TYPE").val(''); 
            

                $("#ClmLossSetmentModal").modal();
                var message = "Loss Claim Settlement";
                $("#msg").text(message);

            }
            else {
                u.growl_warning("No Row selected");
            }  

        });

       
        document.getElementById('btn_Loss_Settlement').onclick = function () {
            document.getElementById('CLPMT_STLMNT_OPTION').disabled = true;
            document.getElementById('CLPMT_EX_GRATIA').disabled = false;
            document.getElementById('CLPMT_TOTAL_LOSS').disabled = false;
        };

        document.getElementById('btn_Expense_Settlement').onclick = function () {
            document.getElementById('CLPMT_STLMNT_OPTION').disabled = false;
            document.getElementById('CLPMT_EX_GRATIA').disabled = true;
            document.getElementById('CLPMT_TOTAL_LOSS').disabled = true;
        };

        //
        $("#btn_Expense_Settlement").click(function () {

            if (!u.form_validation("#clmEstimateForm")) {
                return u.growl_warning("Please fill the fields that are marked red!");
            }

            if (u.grid_empty($scope.expseSetment_grid)) {
                return u.growl_warning("Expense grid is empty!"); 
            }

            var grid = $scope.expseSetment_grid; 
            var sel_id = grid.jqGrid('getGridParam', 'selrow');
            var RiskID = grid.jqGrid('getCell', sel_id, 'CLM_EXP_CLM_EST_TYPE');
            if (RiskID == $("#CLPMT_CLM_EXP_TYPE").val()) {
                //Hide covers not related to selected risk
                $scope.hideShowExp();

                $("#CLPMT_CLAIM_NO").val($("#CLM_N0").val());
                $("#CLPMT_POLH_SYS_ID").val($("#CLM_POLH_SYS_ID").val());
                $("#CLPMT_RISK_SYS_ID").val($("#").val());
                $("#CLPMT_CLM_REG_SYS_ID").val($("#CLM_SYS_ID").val());
                $("#CLPMT_CLM_OFFICE").val($("#CLPMT_CLM_OFFICE1").val());
                $("#CLPMT_POL_OFFICE").val($("#CLM_OFF_CODE").val());
                $("#CLPMT_TXN_TYPE").val('E');
                $("#CLPMT_EX_GRATIA").val('');
                $("#CLPMT_TOTAL_LOSS").val('');

                $("#ClmLossSetmentModal").modal();
                var message = "Expense Claim Settlement";
                $("#msg").text(message);
            }
            else {
                u.growl_warning("No Row selected");
            }
            $("#ClmLossSetmentModal").modal();
        });



        /*
      //Hide or show Estimate Loss
      */
        $scope.hideShowEsts = function () {

            //get the selected Risk ID
            var estimgrid = $scope.lossSetment_grid;
            var selId = estimgrid.jqGrid("getGridParam", "selrow");
            var estimRiskId = estimgrid.jqGrid("getCell", selId, "CLM_EST_TYPE");

            //get the data
            var setlledgrid = $scope.clmSettled_grid;
            var rowIds = setlledgrid.jqGrid("getDataIDs");

            for (var i = 0, len = rowIds.length; i < len; i++) {

                //get value of the cell or column in an array
                var currRow = rowIds[i];

                var getsetlledId = setlledgrid.jqGrid("getCell", currRow, "CLPMT_CLM_TYPE");

                if (estimRiskId != getsetlledId) {

                    $("#" + currRow).hide();

                }
                else if (estimRiskId == getsetlledId) {

                    $("#" + currRow).show();

                }
            }

        };

        $scope.hideShowExp = function () {

            //get the selected Risk ID
            var estimgrid = $scope.expseSetment_grid;
            var selId = estimgrid.jqGrid("getGridParam", "selrow");
            var estimRiskId = estimgrid.jqGrid("getCell", selId, "CLM_EXP_CLM_EST_TYPE");

            //get the data
            var setlledgrid = $scope.clmSettled_grid;
            var rowIds = setlledgrid.jqGrid("getDataIDs");

            for (var i = 0, len = rowIds.length; i < len; i++) {

                //get value of the cell or column in an array
                var currRow = rowIds[i];

                var getsetlledId = setlledgrid.jqGrid("getCell", currRow, "CLPMT_CLM_EXP_TYPE");

                if (estimRiskId != getsetlledId) {

                    $("#" + currRow).hide();

                }
                else if (estimRiskId == getsetlledId) {

                    $("#" + currRow).show();

                }
            }

        };


        $("#btn_LossClm_Onclose").click(function () {

            if (u.grid_empty($scope.lossSetment_grid)) {
                u.modal_confirmation("The Grid is empty, do you want to close form?", function (e) {
                    $("#ClmLossSetmentModal").modal("hide");
                    u.hide_confirm();
                });
            }
            else {
                $("#ClmLossSetmentModal").modal("hide");
            }
        });


        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#").on('click', function () {

            /*-----------------------------------------------
             * setup validation before sending save request
             *---------------------------------------------*/

            if (u.grid_empty($scope.estDtls_grid)) {
                return u.growl_warning("Please enter Estimation Type")
            }

            u.modal_confirmation("Are you sure you want to save?", function (e) {

                var productData = u.parse_form("#clmEstimateForm");
                productData.CLM_TIME_BRD = ($("#CLM_TIME_BRD").is(':checked')) ? 'Y' : 'N';
                productData.CLM_WART_BRCH = ($("#CLM_WART_BRCH").is(':checked')) ? 'Y' : 'N';
                productData.CLM_RPDT = ($("#CLM_RPDT").is(':checked')) ? 'Y' : 'N';
                productData.CLM_CAT = ($("#CLM_CAT").is(':checked')) ? 'Y' : 'N';
                if (!$scope.searched) productData.CLM_STATUS = "U";

                productData.CLM_EST_FIRE_RISK_DTLS = u.get_grid_data($scope.riskdtls_grid);

                productData.CLM_EST_DTLS = u.get_grid_data($scope.estDtls_grid);

                var CLM_EST_EXPENSE = u.get_grid_data($scope.clmExpense_grid);

                for (var i in productData.CLM_EST_DTLS) {
                    //loop through every risk and obtain the sys_id of the risk
                    var id = productData.CLM_EST_DTLS[i]["CLM_EST_TYPE"];

                    productData.CLM_EST_DTLS[i]["CLM_EST_EXPENSE"] = [];

                    for (var y in CLM_EST_EXPENSE) {
                        //find covers which have the same the same risk sys_id
                        if (CLM_EST_EXPENSE[y]["CLM_EXP_CLM_EST_TYPE"] === id) {
                            productData.CLM_EST_DTLS[i]["CLM_EST_EXPENSE"].push(CLM_EST_EXPENSE[y]);

                        }
                    }
                }

                console.log(productData);

                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_estimation(productData, function (responseData) {
                        $scope.saving = false;
                        u.hide_confirm();
                        if (responseData.state) {

                            u.update_grid_status($scope.riskdtls_grid, "CLM_RISK_STATUS");

                            u.update_grid_status($scope.estDtls_grid, "CLM_EST_STATUS");

                            $scope.edited = false;
                            u.growl_success(responseData.message);

                        } else {
                            u.hide_confirm();
                            u.growl_error(responseData.mesage);
                        }
                    }, function () {
                        u.growl_error("Server Error please try again later.");
                    });
                }

            })
        });


        $("#btn_Save").on('click', function () {

            if (u.grid_empty($scope.clmSettled_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.clmSettled_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_settlement(u.get_grid_data($scope.clmSettled_grid), function (responseData) {
                        $scope.saving = false; 
                        if (responseData.state) {
                            var formgrid = $scope.clmSettled_grid;
                            var rowIds = $scope.clmSettled_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "CLPMT_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "CLPMT_STATUS", "A");
                                }
                            }
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


        var message = "";
        /*--------------------------
         * Delete/Update Data
         *------------------------*/
        //
        $("#btn_Delete").click(function () {
            u.modal_confirmation("Are you sure you want to delete this Claim?", function () {
                if ($("input[name='CLM_SYS_ID']").val().length <= 0) {
                    //$scope.reset_setup();
                    u.hide_confirm();
                } else {
                    if (!$scope.saving) {
                        $scope.saving = true;
                        var claim_data = u.parse_form("#clmEstimateForm");
                        claim_data.CLM_STATUS = "D";
                        s.save_estimation(claim_data,
                            function (response) {
                                u.hide_confirm();
                                $scope.saving = false;
                                if (response.state) {
                                    u.growl_success("Claim Estimation Successfully Deleted");
                                    reset_form();
                                } else {
                                    u.growl_error("Error deleting Policy")
                                }
                            },
                            function () {
                                u.hide_confirm();
                                $scope.saving = false;
                                u.growl_error("Can not delete Claim Estimation at the moment please try again later")
                            })
                    } else {
                        u.growl_info("The application is busy please wait for the current process to finish")
                    }
                }

            })

        });


        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //
        $("#btn_Reset").on('click', function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#clmEstimateForm");
                u.form_reset("#clmEstDtlsForm");
                u.form_reset("#clmExpenseForm");
                u.clear_grid_data($scope.estDtls_grid);
                u.clear_grid_data($scope.riskdtls_grid);
                u.clear_grid_data($scope.clmExpense_grid);
                u.clear_grid_data($scope.polrisk_grid);
                u.hide_confirm();
                u.growl_success("Form successfully cleared")
            });
        });

        function reset_form() {
            u.form_reset("#productForm");
            u.form_reset("#coverForm");
            u.form_reset("#clausesForm");
            u.form_reset("#discloadForm");
            $scope.cover_grid.jqGrid('clearGridData');
            $scope.clauses_grid.jqGrid('clearGridData');
            $scope.discload_grid.jqGrid('clearGridData');
        }


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

        /*-----------------------------------
         * exporting of the grid to excel
         *----------------------------------*/
        $("#export-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.estDtls_grid, ["ID"], "Class_Business_List_Excel");
        });


        /*-------------------------------------
         * setting datepicker for date fields
         *------------------------------------*/
        u.set_datepicker("input[name='CLM_LOSS_DATE']");
        u.set_datepicker("input[name='CLM_DISC_DATE']");
        u.set_datepicker("input[name='CLM_REP_DATE']");
        u.set_datepicker("input[name='CLM_TXN_DATE']");
        u.set_datepicker("input[name='CUS_DOB']");

        /*-----------------------------
        * Code validation
        *-----------------------*/
        u.codeVal("form input[name='CLM_EST_SYS_ID']", "check_channel_code");

        u.lovCodeVal("form input[name='CLM_EST_TYPE']", "check_estimation_code", "form input[name='CLM_EST_NAME']");
        u.lovCodeVal("form input[name='CLM_CAT_EVNT_CODE']", "check_cat_code", "form input[name='CLM_CAT_NAME']");
        u.lovCodeVal("form input[name='CLM_LOSS_CODE']", "check_loss_code", "form input[name='CLM_CAUSE_NAME']");
        u.lovCodeVal("form input[name='CLM_EXP_CODE']", "check_loss_code", "form input[name='CLM_EXP_NAME']");
        u.lovCodeVal("form input[name='CLM_OFF_CODE']", "check_office_code", "form input[name='OFF_NAME']");

        document.getElementById('CLM_CAT').onchange = function () {
            document.getElementById('CLM_CAT_EVNT_CODE').disabled = !this.checked;
            document.getElementById('CLM_CAT_NAME').disabled = !this.checked;
        };

        function getCust() {
            u.lovCodeVal("form input[name='CLM_CLT']", "check_cust_code", "form input[name='CLM_CLT_NAME']");
        }



    });

})(window.$, window.service, window.utility, {})