class BankList {
    constructor(map) {
        this.map = map;

        this.list = d3.select("#bank-list");
        this.bank_details = d3.select("#bank-details");
    }

    clear() {
        this.list.html("");
        this.bank_details.html("");
    }

    update(banks) {
        let thislist = this;
        this.clear();
        
        this.list.selectAll("li").data(banks).enter()
            .append("li")
            .text(bank => bank["Institution Name"])
            .classed("bank-list-text", true)
            .on("click", function () {
                let bank_li = d3.select(this);
                let bank = bank_li.datum();
                thislist.bank_details.html(`
                <h3>${bank["Institution Name"]}</h3>
                <span>Location: ${bank["Location"]}</span><br>
                <span>Effective Date: ${bank["Effective Date"]}</span><br>
                <span>Total Assets: ${bank["Total Assets"]}</span><br>
                <span>Total Deposites: ${bank["Total Deposits"]}</span><br>
                <span>Estimated Loss: ${bank["Estimated Loss"]}</span><br>
                <span>Acquirer: ${bank["Acquiring Institution"]}</span>
                `);
                
                thislist.map.markDetailedBank(bank);
            });

    }
}