
const PaymentInfoCart = ({ Icon, bgColor, color, title, subTitle, textColor, amount }) => {
    return (
        <div className="pt-4 px-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <div className={`${bgColor} rounded-lg p-2`}>
                        <Icon className={`${color} text-lg`} />
                    </div>
                    <div className="">
                        <h2 className="font-semibold leading-none">{title} </h2>
                        <p className="text-xs">{subTitle}</p>
                    </div>
                </div>
                <div className="text-red-500 font-medium">
                    <p className={`${textColor} font-semibold tracking-wider`}>{amount}</p>
                </div>
            </div>
        </div>
    );
};

export default PaymentInfoCart;