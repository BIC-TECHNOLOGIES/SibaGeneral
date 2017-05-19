(function ($, s, u, $scope) {
    $(function () {

        // Cover Grid
        $scope.cover_grid = u.default_grid("#grdCover", "#grdCoverPager", "Cover List",
            ['Sys ID', 'Home Owners Sys ID', 'Cover Code', 'Cover Name', 'Cover SI', 'Rate', 'Premium', ' Defaulted', 'Created by', 'Created Date', 'Status', 'ID'],
            [
                { name: 'HCV_SYS_ID', index: 'HCV_SYS_ID', hidden: true, width: 150 },
                { name: 'HCV_HON_SYS_ID', index: 'HCV_HON_SYS_ID', hidden: true, width: 150 },
                { name: 'HCV_COV_CODE', index: 'HCV_COV_CODE', width: 150 },
                { name: 'HCV_COV_NAME', hidden: false, index: 'HCV_COV_NAME', width: 150 },
                { name: 'HCV_SI', index: 'HCV_SI', width: 100 },
                { name: 'HCV_DEF_RATE', index: 'HCV_DEF_RATE', width: 150 },
                { name: 'HCV_DEF_PREM', index: 'HCV_DEF_PREM', width: 150 },
                { name: 'HCV_DFT', index: 'HCV_DFT', width: 150 },
                { name: 'HCV_CRTE_BY', index: 'HCV_CRTE_BY', width: 150 },
                { name: 'HCV_CRTE_DATE', index: 'HCV_CRTE_DATE', width: 150 },
                { name: 'HCV_STATUS', index: 'HCV_STATUS', width: 150 },
                { name: 'HCV_SYS_ID', hidden: true, index: 'HCV_SYS_ID', width: 150 },
            ],
            //Retrive Grid data into form input fields on row click..
            function (sel_id) {
                var grid = $scope.cover_grid;
                var sel_id = grid.jqGrid('getGridParam', 'selrow');
                $("form input[name='HCV_COV_CODE']").data("update", true);
                u.fill_form({
                    HCV_COV_CODE: grid.jqGrid('getCell', sel_id, 'HCV_COV_CODE'),
                    HCV_SI: grid.jqGrid('getCell', sel_id, 'HCV_SI'),
                    HCV_DEF_RATE: grid.jqGrid('getCell', sel_id, 'HCV_DEF_RATE'),
                    HCV_COV_NAME: grid.jqGrid('getCell', sel_id, 'HCV_COV_NAME'),
                    HCV_STATUS: grid.jqGrid('getCell', sel_id, 'HCV_STATUS'),
                    HCV_DEF_PREM: grid.jqGrid('getCell', sel_id, 'HCV_DEF_PREM'),
                }, "#coverForm");
            }),


        //Search grid
        $scope.searchGrid = u.default_grid("#grdSearchResults", "#grdSearchResultsPager", "Product Search Result",
            ["Index", "Product Code", "Product Name"],
            [
                { name: 'Index', id: true, index: 'Index', width: 150 },
                { name: 'PCC_CODE', index: 'PCC_CODE', width: 150 },
                { name: 'PCC_NAME', index: 'PCC_NAME', width: 150 },
            ],
              function (index) {
                  $scope.selected_index = index;
                  $scope.search_fill($scope.result[index]);
              },
                function (index) {
                    $scope.search_fill($scope.result[index]);
                    u.clear_grid_data($scope.searchGrid);
                    $("#mySearchResultModal").modal("hide");
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
                case "btn_section":
                    $scope.lov.call_dialog("Select Cover", "get_lov_section", $scope.dialog_data);
                    break;              
                case "btn_product":
                    $scope.lov.call_dialog("Select Product", "get_lov_product", $scope.dialog_data);
                    break;
                case "btn_cover":
                    $scope.lov.call_dialog("Select Cover", "get_lov_cover", $scope.dialog_data);
                    break;
                
            }
        });
        $scope.cov_id = 0;
        /*--------------------------------------------------
           * add Cover
           *------------------------------------------------*/
        //
        $("#btn_add_cover").on('click', function () {

            if (u.form_validation("#coverForm")) {
                if ($("input[name='HCV_COV_CODE']").val() === "") return u.modal_alert("Please Select Condition Clause");

                u.modal_confirmation("Are you sure you want to add the Cover?", function() {

                    var rowIds = $scope.cover_grid.jqGrid('getDataIDs');

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
                    var cellValue = $scope.cover_grid.jqGrid('getCell', currRow, 'HCV_COV_CODE');

                    Code.push(cellValue);
                }

                /*----------------------------------------
                 * add if code is not found in the Grid
                 *--------------------------------------*/
                //
                if ($.inArray($("input[name='HCV_COV_CODE']").val(), Code) < 0) {

                    var FormData = u.parse_form("#coverForm");
                    FormData.HCV_STATUS = "U";
                    FormData.HCV_DFT = ($("#HCV_DFT").is(':checked')) ? 'Y' : 'N';
                    FormData.HCV_DISC = ($("#HCV_DISC").is(':checked')) ? 'Y' : 'N';
                    FormData.HCV_LOAD = ($("#HCV_LOAD").is(':checked')) ? 'Y' : 'N';
                    FormData.HCV_CRTE_BY = "Admin";
                    FormData.HCV_CRTE_DATE = u.get_date();
                    $scope.cover_grid.addRowData(FormData.HCV_COV_CODE, FormData);
                    u.hide_confirm();
                    u.growl_success("Cover successfully added to grid");
                }
                else {
                    u.hide_confirm();
                    u.growl_warning("Cover with code " + cellValue + " Already exists");
                }
                });

        } else {
            u.growl_error("Please fill out the fields that are marked red");
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

            var recordStatus = grid.jqGrid('getCell', row_id, 'HCV_STATUS');

            var Code = grid.jqGrid('getCell', row_id, 'HCV_COV_CODE');

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

                    grid.jqGrid('setCell', row_id, 'HCV_STATUS', 'D');
                    $('#' + row_id, '#grdCover').css({ color: 'red' });

                    u.hide_confirm();
                    u.growl_hide("Selected row successfully marked for deletion, please click on the save button to save changes");

                } else if (recordStatus == "D") {

                    $('#' + row_id, '#grdCover').css({ color: 'black' });
                    grid.jqGrid('setCell', row_id, 'HCV_STATUS', 'A');
                    u.hide_confirm();
                    u.growl_hide("Data successfully restored");
                }

            });

        });


        /*--------------------------------
         * Edit/Update Function
         *------------------------------*/
        //

        $("#btn_update_cover").on('click', function () {

            if (u.grid_empty($scope.cover_grid)) return u.growl_info("The grid is empty");

            u.modal_confirmation("Are you sure you want to update the selected Row?", function () {

                var grid = $scope.cover_grid;

                var row_id = grid.jqGrid('getGridParam', 'selrow');

                var Code = grid.jqGrid('getCell', row_id, 'HCV_COV_CODE');

                if (Code == $('#HCV_COV_CODE').val()) {

                    grid.jqGrid('setCell', row_id, 'HCV_DFT', $('#HCV_DFT').is(':checked')) ? 'Y' : 'N';
                    grid.jqGrid('setCell', row_id, 'HCV_COV_CODE', $('#HCV_COV_CODE').val());
                    grid.jqGrid('setCell', row_id, 'HCV_SI', $('#HCV_SI').val());
                    grid.jqGrid('setCell', row_id, 'HCV_DEF_RATE', $('#HCV_DEF_RATE').val());
                    grid.jqGrid('setCell', row_id, 'HCV_DEF_PREM', $('#HCV_DEF_PREM').val());
                    grid.jqGrid('setCell', row_id, 'MRC_DFT_PREM', $('#MRC_DFT_PREM').val());

                    u.hide_confirm();
                    u.growl_success(" Cover successfully updated");
                    $("form input[name='HCV_COV_CODE']").data("update", false);
                }
                else {
                    u.hide_confirm();
                    u.growl_info("Please Select a row to edit");
                }

            });
        });


        /*-----------------------------------
        * exporting of the grid to excel Condition & Clauses
        *----------------------------------*/
        $("#export-cover-btn").click(function () {
            /*
             * function to export grid data into excel
             */
            u.excel_export($scope.cover_grid, ["ID"], "Cover_List_Excel");
        });


        /*-----------------------------
         * Save/Update Data
         *---------------------------*/
        //
        $("#btn_Save").on('click', function () {

            /*-----------------------------------------------
             * setup validation before sending save request
             *---------------------------------------------*/

            if (!u.form_validation("#sectionForm")) {
                return u.growl_warning("Please fill the fields that are marked red");
            }

            if (u.grid_empty($scope.cover_grid)) {
                return u.growl_warning("Please enter Product Cover")
            }
          

            u.modal_confirmation("Are you sure you want to save?", function (e) {

                var productData = u.parse_form("#sectionForm");
                if (!$scope.searched) productData.HON_STATUS = "U";

                productData.MS_UDW_HOME_OWNERS_COVERS = u.get_grid_data($scope.cover_grid);

                console.log(productData);

                    if (!$scope.saving) {
                        $scope.saving = true;
                        s.save_homeowners(productData, function (responseData) {
                            $scope.saving = false;
                            u.hide_confirm();
                            if (responseData.state) {

                                u.update_grid_status($scope.cover_grid, "HCV_STATUS");
                               
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

            });
        });



        /*------------------------------
         * Refresh or Reset form
         *----------------------------*/
        //
        $("#btn_Reset").on('click', function () {
            u.modal_confirmation("Are you sure you want to clear all data from the form?", function (e) {
                u.form_reset("#sectionForm");
                u.form_reset("#coverForm");              
                $scope.cover_grid.jqGrid('clearGridData');            
                u.hide_warning();
                u.growl_success("Form successfully cleared");
            });

        });

        function reset_form () {
            u.form_reset("#sectionForm");
            u.form_reset("#coverForm");
            $scope.cover_grid.jqGrid('clearGridData');
        }

        /*-----------------
       * search grid
       *----------------*/
        $scope.search_grid = u.default_grid("#grdSearchResults", "#grdSearchResultsPager", "Search Results",
            ["Code", "Name", "Status", "index"],
            [
                { name: "HON_CODE", index: "HON_CODE", hidden: true },
                { name: "HON_NAME", index: "HON_NAME" },
                { name: "HON_STATUS", index: "HON_STATUS" },
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
        $("#btnQueryHomeowners").click(function () {
            var query = $("#txtSearch").val();
            if (query && query.length > 0 && query !== " ") {
                s.search_homeowners(query, function (result) {
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
                        u.growl_info("Search not found, please make sure you enter the correct Code!");
                    }
                },
                    function (err) {
                        u.growl_error("Error fetching search results");
                    });
            } else {
                u.growl_info("Please check Home Owners Code and try again!");
            }
        });

        $scope.search_fill = function (product) {

            $scope.cover_grid.jqGrid("clearGridData");

            u.fill_form(product, "#sectionForm");

            //populating child entities
            u.clear_grid_data($scope.cover_grid);
            for (var i in product.MS_UDW_HOME_OWNERS_COVERS) {
                $scope.cover_grid.addRowData(product.MS_UDW_HOME_OWNERS_COVERS[i].HCV_HON_SYS_ID, product.MS_UDW_HOME_OWNERS_COVERS[i]);
            }

        };


        /*--------------------
* Motor Tariff button
*------------------*/
        $("#btn_Delete").click(function () {
            u.modal_confirmation("Are you sure you want to delete this Product?", function () {
                if ($("input[name='HON_CLASS']").val().length <= 0) {
                    $scope.reset_setup();
                    u.hide_confirm();
                } else {
                    if (!$scope.saving) {
                        $scope.saving = true;
                        var product_data = u.parse_form("#sectionForm");
                        product_data.HON_STATUS = "D";
                        s.save_product(product_data,
                            function (response) {
                                u.hide_confirm();
                                $scope.saving = false;
                                if (response.state) {
                                    u.growl_success("Product Successfully Deleted");
                                    reset_form();
                                } else {
                                    u.growl_error("Error deleting Policy");
                                }
                            },
                            function () {
                                u.hide_confirm();
                                $scope.saving = false;
                                u.growl_error("Can not delete Tariiff at the moment please try again later");
                            });
                    } else {
                        u.growl_info("The application is busy please wait for the current process to finish");
                    }
                }

            });
        });


        $('#HCV_DEF_PREM').prop('disabled', true);

        $('#HCV_DEF_PREM').css("background", "silver");

        document.getElementById("HCV_DEF_RATE").addEventListener("focusout", rateFunction);
        document.getElementById("HCV_SI").addEventListener("focusout", rateFunction);

        function rateFunction() {
            //alert("Input field lost focus.");
            var defPrem = "";

            defPrem = ($('#HCV_SI').val() * $('#HCV_DEF_RATE').val() * 0.01).toFixed(2);

            $('#HCV_DEF_PREM').val(defPrem);
        }


        /*-----------------------------
* LOV code validation
*---------------------------*/
        u.codeVal("form input[name='HON_CODE']", "check_product_code");

        u.lovCodeVal("form input[name='HCV_COV_CODE']", "check_cover_code", "form input[name='CVR_NAME']");
        u.lovCodeVal("form input[name='PCC_CLAU_CODE']", "check_conditionsclauses_code", "form input[name='CCL_NAME']");
        u.lovCodeVal("form input[name='HON_CLASS']", "check_classes_code", "form input[name='COB_NAME']");
        u.lovCodeVal("form input[name='PLDI_LDI_CODE']", "check_discload_code", "form input[name='PLDI_LDI_NAME']");
    });

})(window.$, window.service, window.utility, {})