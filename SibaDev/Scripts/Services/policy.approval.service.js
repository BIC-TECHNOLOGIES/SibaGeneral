(function (s, u) {
    s.add({
        policyApproval: function(data,success,error) {
            u.post("/api/policyapproval",data,success,error)
        },
        BondpolicyApproval: function(data,success,error) {
            u.post("/api/policybondapproval", data, success, error)
        },
        FirepolicyApproval: function (data, success, error) {
            u.post("/api/policyfireapproval", data, success, error)
        },
        TravelpolicyApproval: function (data, success, error) {
            u.post("/api/policytravelapproval", data, success, error)
        },
        TransitpolicyApproval: function (data, success, error) {
            u.post("/api/policytransitapproval", data, success, error)
        },
        ProfIndemnitypolicyApproval: function (data, success, error) {
            u.post("/api/policyprofindemnityapproval", data, success, error)
        },
        PapolicyApproval: function (data, success, error) {
            u.post("/api/policypaapproval", data, success, error)
        },
    });
})(window.service, window.utility)