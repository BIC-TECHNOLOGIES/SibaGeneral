﻿(function ($, s, u, $scope) {
    $(function () {


        $scope.acctperiod_grid = u.default_grid("#grdAcctPeriod", "#grdAcctPeriodPager", "Account Period List",
     ['Code', ' Period from', 'Period to', 'Open',
                       'Close', 'Status', 'Created By', 'Created Date'],
     [
        { name: 'ACP_YEAR_CODE', id: true, index: 'ACP_YEAR_CODE' },
        { name: 'ACP_PERIOD_FROM', index: 'ACP_PERIOD_FROM' },
        { name: 'ACP_PERIOD_TO', index: 'ACP_PERIOD_TO' },
        { name: 'ACP_MONTH_OPEN', index: 'ACP_MONTH_OPEN' },
        { name: 'ACP_MONTH_CLOSE', index: 'ACP_MONTH_CLOSE' },
        { name: 'ACP_STATUS', index: 'ACP_STATUS' },
        { name: 'ACP_CRTE_BY', index: 'ACP_CRTE_BY' },
        { name: 'ACP_CRTE_DATE', index: 'ACP_CRTE_DATE' }
     ],
    //Retrive Grid data into form input fields on row click..
    function (sel_id) {
        var grid = $scope.acctperiod_grid;
        var sel_id = grid.jqGrid('getGridParam', 'selrow');
        $("form input[name='ACP_YEAR_CODE']").data("update", true);
        u.fill_form({
            ACP_YEAR_CODE: grid.jqGrid('getCell', sel_id, 'ACP_YEAR_CODE'),
            ACP_PERIOD_FROM: grid.jqGrid('getCell', sel_id, 'ACP_PERIOD_FROM'),
            ACP_PERIOD_TO: grid.jqGrid('getCell', sel_id, 'ACP_PERIOD_TO'),
            ACP_MONTH_OPEN: grid.jqGrid('getCell', sel_id, 'ACP_MONTH_OPEN'),
            ACP_MONTH_CLOSE: grid.jqGrid('getCell', sel_id, 'ACP_MONTH_CLOSE'),
            ACP_STATUS: grid.jqGrid('getCell', sel_id, 'ACP_STATUS')
        }, "#acctperiodForm");
    }),
   $scope.saving = false;


        /*--------------------------------------------------
           * call add function to add records to  acctperiod_grid
           *------------------------------------------------*/
        //
        $("#btn_add_record").on('click', function () {

            if (u.field_empty("input[name='ACP_YEAR_CODE']")) return u.growl_error

               ("The Form code field is empty, please fill and to add to the grid");

            u.modal_confirmation("Are you sure you want to add Account Period to the grid?", function () {

                var rowIds = $scope.acctperiod_grid.jqGrid('getDataIDs');

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
                    var cellValue = $scope.acctperiod_grid.jqGrid('getCell', currRow, 'ACP_YEAR_CODE');

                    Code.push(cellValue);
                }

                /*----------------------------------------
                 * add if code is not found in the Grid
                 *--------------------------------------*/
                //
                if ($.inArray($('#ACP_YEAR_CODE').val(), Code) < 0) {

                    var FormData = u.parse_form("#acctperiodForm");
                    FormData.ACP_STATUS = "U";
                    FormData.ACP_CRTE_BY = "Admin";
                    FormData.ACP_CRTE_DATE = u.get_date();
                    $scope.acctperiod_grid.addRowData(FormData.ACP_YEAR_CODE, FormData);
                    u.hide_confirm();
                    u.growl_success("Account Period successfully added to grid");
                }

            else {
                    u.hide_confirm();
                u.growl_warning("Code exists, you cannot add same Code :  " + cellValue);
            }

        });
        });


        /*----------------------------------------------------
         * Remove record or Mark for deletion from City Grid
         *---------------------------------------------------*/

        $("#btn_remove_record").on('click', function () {
           
            if (u.grid_empty($scope.acctperiod_grid)) return u.growl_info("The grid is empty");

            var grid = $scope.acctperiod_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var recordStatus = grid.jqGrid('getCell', row_id, 'ACP_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'ACP_YEAR_CODE');

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

                    grid.jqGrid('setCell', row_id, 'ACP_STATUS', 'D');
                    $('#' + row_id, '#grdAcctPeriod').css({ color: 'red' });
                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdAcctPeriod').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'ACP_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //
        $("#btn_update_record").on('click', function () {

            if (u.grid_empty($scope.acctperiod_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

            var grid = $scope.acctperiod_grid;

            var row_id = grid.jqGrid('getGridParam', 'selrow');

            var Code = grid.jqGrid('getCell', row_id, 'ACP_YEAR_CODE');

            if (Code == $('#ACP_YEAR_CODE').val()) {

                grid.jqGrid('setCell', row_id, 'ACP_YEAR_CODE', $('#ACP_YEAR_CODE').val());
                grid.jqGrid('setCell', row_id, 'ACP_PERIOD_FROM', $('#ACP_PERIOD_FROM').val());
                grid.jqGrid('setCell', row_id, 'ACP_PERIOD_TO', $('#ACP_PERIOD_TO').val());
                grid.jqGrid('setCell', row_id, 'ACP_MONTH_OPEN', $('#ACP_MONTH_OPEN').val());
                grid.jqGrid('setCell', row_id, 'ACP_MONTH_CLOSE', $('#ACP_MONTH_CLOSE').val());
                grid.jqGrid('setCell', row_id, 'COM_CPARTY_TYPE', $('#COM_CPARTY_TYPE').val());
                grid.jqGrid('setCell', row_id, 'COM_BPARTY_TYPE', $('#COM_BPARTY_TYPE').val());
                u.hide_confirm();
                u.growl_success("Account Period successfully updated");
                $("form input[name='ATY_CODE']").data("update", false);
            }
            else {
                u.hide_confirm();
                u.growl_info("Please Select a row to edit");
            }

            });
        });

        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on('click', function () {

            if (u.grid_empty($scope.acctperiod_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to Save Changes?", function (e) {

                /*-----------------------------
                 * obtain data from the grid
                 *---------------------------*/
                console.log(u.get_grid_data($scope.acctperiod_grid));
                /*-----------------------------------
                 * send data to backend for saving
                 *---------------------------------*/
                if (!$scope.saving) {
                    $scope.saving = true;
                    s.save_accountperiods(u.get_grid_data($scope.acctperiod_grid), function (responseData) {
                        $scope.saving = false;
                        if (responseData.state) {
                            var formgrid = $scope.acctperiod_grid;
                            var rowIds = $scope.acctperiod_grid.jqGrid("getDataIDs");

                            // iterate through the rows in Cover Grid and update Status
                            for (var i = 0, len = rowIds.length; i < len; i++) {
                                var covCurrRow = rowIds[i];

                                var covRecStatus = formgrid.jqGrid("getCell", covCurrRow, "ACP_STATUS");

                                //Delete row if it is marked for deletion
                                if (covRecStatus === "D") {
                                    formgrid.jqGrid("delRowData", covCurrRow);
                                }
                                //Update row status to Active (A) if it is newly added
                                if (covRecStatus === "U") {
                                    formgrid.jqGrid("setCell", covCurrRow, "ACP_STATUS", "A");
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
        $("#btn_Delete").on('click', function () {
            u.modal_warning("Are you sure you want Delete the Record?");

            $('#btnOkWarning').click(function (e) {
                u.modal_warning("Wait while the transaction is being deleted..........");
            });

        });


        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //
        $("#btn_Reset").on('click', function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#acctperiodForm");
                u.clear_grid_data($scope.acctperiod_grid);
                u.hide_confirm();
                u.growl_success("Form successfully cleared");
            });

        });


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
            u.excel_export($scope.acctperiod_grid, ["ID"], "Account_Period_List_Excel");
        });


        /*---------------------------
         *  Search
         *-------------------------*/
        $("#btnQueryAcctPeriod").click(function () {
            var query_txt = $("#txtSearch").val();
            if (query_txt != null && query_txt.length > 0) {
                s.search_accountperiod(query_txt,
                    function (result) {
                        /*
                         * clear grid before populating
                         */
                        $scope.acctperiod_grid.jqGrid('clearGridData');
                        for (var i in result) {
                            $scope.acctperiod_grid.addRowData(result[i].ACP_YEAR_CODE, result[i]);
                        }
                    },
                    function (err) {

                    });
            } else {
                /*--------------------------------
                 * clear grid before populating
                 *------------------------------*/
                $scope.acctperiod_grid.jqGrid('clearGridData');

                //fetch all 
                s.get_accountperiods(function (acctperiods) {
                    for (var i in acctperiods) {
                        $scope.acctperiod_grid.addRowData(acctperiods[i].ACP_YEAR_CODE, acctperiods[i]);
                    }
                });
            }

        });

        /*-----------------------------
* Code validation
*-----------------------*/
        u.codeVal("form input[name='ACP_YEAR_CODE']", "check_accountperiod_code");

    });

})(window.$, window.service, window.utility, {})