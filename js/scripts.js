function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



//javascript for search page
var item1 = "this is for Mutual funds";
var item2 = "this is for fund mgt";
var item3 = "this is for Wealth mgt";
// var arkFundImg = $("ark").src;

// Databank Information
var dataBank = ["Founded in April 1990, Databank’s mission is to empower its customers to achieve financial independence by promoting financial literacy and offering a diverse range of investment products. To deliver on our mission, we provide innovative and responsive corporate finance, brokerage, fund management and research services to local and foreign individuals, multinational companies, pension trusts, institutions and portfolio investors for the ECOWAS sub-region. We also assist those who are looking for private equity financing through our private equity group.","ArkFund is a balanced mutual fund that allows you to align your ethical considerations with your investments. ArkFund mobilizes funds from investors (shareholders) and invests in high quality equities as well as fixed-income securities.", "ArkFund", "arkFundImg"];
var epack = ["With Epack, investors get to enjoy well-researched stocks traded on the Ghana Stock Exchange (GSE) and 9 other African stock markets. This helps to diversify investor-risk and yield significant growth in the long term.","Epack"];
var edifund = ["EdIFund is a mutual fund created to help people invest towards financing their educational needs. EdIFund seeks to provide you with the peace of mind that comes with knowing your education needs are being take care of.","EdIFund"];
var bfund = ["The Fund’s investment objective is to balance your risk and return by investing in a combination of equity and fixed-income securities to provide sustainable growth in your capital over the medium to long term.","BFund"]

// CDH Information
var balancedFund = ["Established in 1986, CDH Financial Holdings Limited started out as the first discount house in Ghana, under the name "Consolidated Discount House Limited (CDH)". The primary objective of the company was to help maintain liquidity in Ghana's financial services sector.","CDH Balanced Fund is a collective investment scheme.This Fund seeks to achieve growth in income and capital with the aim of generating medium to long-term value, while ensuring high security and safety of funds invested.","Balanced Fund"];
var assetManagement = ["This involves the provision of tailor-made investment management services. Funds are diversified and managed to achieve your specific investment objectives. They are engaged primarily in wealth management and managed collective investment schemes. They offer an array of fund management services, including management of pension and other institutional funds, provident funds, personal retirement and other mutual funds.","Asset Management"];

// FirstBanc Information
var mutualFund = ["FirstBanC Financial Services is a SEC-licensed Investment Banking Firm. Its mission has been to help clients build wealth by providing creative, innovative world class financial services including Fund Management and Advisory Services. As an investment bank, its vision is to become the premier integrated investment banking firm in Ghana and beyond.","This Unit manages two mutual funds namely: First Fund and Heritage Fund. FirstBanC’s mutual funds are the right investment vehicle for those who want to invest regular amounts and benefit from the services of our professional fund management team.","Mutual Fund"];
var fundMgt = ["FirstBanC’s Private Wealth Management service is designed to offer a full range of discretionary and non-discretionary investment management services to high-net-worth clients who wish to maximise their access to a flexible, personal service by a Wealth Manager.","Fund management"];
var wealthMgt =["This Private Wealth Management service is designed to offer a full range of discretionary and non-discretionary investment management services to high-net-worth clients who wish to maximise their access to a flexible, personal service by a Wealth Manager.","Wealth Management"];
//User interface
$(document).ready(function () {
  $("button#search1").click(function(event){
    event.preventDefault();
    if ($("#usr1").val()==="arkfund"){
      // $("#product1").append(dataBank[3]);
      $("#descr1").append(dataBank[2]);
      $("#benefits1").append(dataBank[1]);
      $("#history1").append(dataBank[0]);
    }else if($("#usr1").val()==="epack"){
      // $("#product1").append(item2);
      $("#descr1").append(epack[1]);
      $("#benefits1").append(epack[0]);
        $("#history1").append(dataBank[0]);
    }else if ($("#usr1").val()==="edifund") {
      // $("#product1").append(item3);
      $("#descr1").append(edifund[1]);
      $("#benefits1").append(edifund[0]);
        $("#history1").append(dataBank[0]);
    }else if ($("#usr1").val()==="bfund") {
      // $("#product1").append(item3);
      $("#descr1").append(bfund[1]);
      $("#benefits1").append(bfund[0]);
        $("#history1").append(dataBank[0]);
    }
    });

    if ($("#usr1").val()==="balanced fund"){
      // $("#product1").append(dataBank[3]);
      $("#descr1").append(balancedFund[2]);
      $("#benefits1").append(balancedFund[1]);
      $("#history1").append(balancedFund[0]);
    }else if($("#usr1").val()==="fund management"){
      // $("#product1").append(item2);
      $("#descr1").append(fundMgt[1]);
      $("#benefits1").append(fundMgt[0]);
        $("#history1").append(balancedFund[0]);
      }else if($("#usr1").val()==="wealth management"){
        $("#descr1").append(wealthMgt[1]);
        $("#benefits1").append(wealthMgt[0]);
        $("#history1").append(balancedFund[0]);
    }
    });

    if ($("#usr1").val()==="mutual fund"){
      // $("#product1").append(dataBank[3]);
      $("#descr1").append(mutualFund[2]);
      $("#benefits1").append(mutualFund[1]);
      $("#history1").append(mutualFund[0]);
    }else if($("#usr1").val()==="epack"){
      $("#descr1").append(mutualFund[2]);
      $("#benefits1").append(mutualFund[1]);
      $("#history1").append(mutualFund[0]);

    $("button#search2").click(function(){
      event.preventDefault();
      if ($("#usr2").val()==="Mutual Fund"){
        $("#product2").append(item1);
      }else if($("#usr2").val()==="Wealth Management"){
        $("#product2").append(item2);
      }else if ($("#usr2").val()==="Fund management") {
        $("#product2").append(item3);
      }
    });

  });
