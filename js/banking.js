document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = document.getElementById('deposit-input');
    const depositAmountText = depositAmount.value;
    const newDepositeAmount = parseFloat(depositAmountText);



    const depositTotall = document.getElementById('deposit-totall');
    const depositTotallText = depositTotall.innerText;
    const newDepositeTotall = parseFloat(depositTotallText);
    const totallDeposit = newDepositeTotall + newDepositeAmount;
    depositTotall.innerText = totallDeposit;

    const balanceTotall = document.getElementById('balance-totall');
    const balanceTotallText = balanceTotall.innerText;
    const previousBalanceTotall = parseFloat(balanceTotallText);
    const newBalanceTotall = previousBalanceTotall + newDepositeAmount;
    balanceTotall.innerText = newBalanceTotall;









    depositAmount.value = '';




})

document.getElementById('widthraw-button').addEventListener('click', function () {
    const widthrawInput = document.getElementById('widthraw-input');
    const widthrawInputText = widthrawInput.value;
    const newWidthrawInput = parseFloat(widthrawInputText);

    const widthrawTotall = document.getElementById('widthraw-totall');
    const widthrawTotallText = widthrawTotall.innerText;
    const newWidthrawTotall = parseFloat(widthrawTotallText);
    const totallWidthraw = newWidthrawTotall + newWidthrawInput;
    widthrawTotall.innerText = totallWidthraw;


    const balanceTotall = document.getElementById('balance-totall');
    const balanceTotallText = balanceTotall.innerText;
    const previousBalanceTotalll = parseFloat(balanceTotallText);
    const newBalanceTotall = previousBalanceTotalll - newWidthrawInput;
    balanceTotall.innerText = newBalanceTotall;








    widthrawInput.value = '';




})