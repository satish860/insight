define(function (require) {

    return {
        
        _menus: [
            { name: "Administration", Active: "1", Incomplete: "2", Pending: "3" },
            { name: "Agreement", Active: "1", Incomplete: "2", Pending: "3" },
              { name: "Animals", Active: "1", Incomplete: "2", Pending: "3" },
                { name: "BioSafety", Active: "1", Incomplete: "2", Pending: "3" },
                  { name: "Clinical Trials", Active: "1", Incomplete: "2", Pending: "3" },
                    { name: "Conflict of Interest", Active: "1", Incomplete: "2", Pending: "3" }
        ],

        listMovies: function () {
            return this._menus;
        },
    };
});