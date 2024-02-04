import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";


const Accordion = () => {
    const [isOpen, setIsOpen] = useState(null);

    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

    const datas = [
        {
            title: "Send Flowers Online with Flower Delivery by Flowers Shop, the World's Favorite Florist! ",
            color: 'green',
            description: "There's no better place to order flowers online than 1-800-Flowers.com. Whether you're looking to buy flowers and gifts like roses, orchids, gift baskets, bonsai trees, flowering plants or wedding bouquets, we have the highest quality blooms and the most talented florists who can create exactly what you order. Dazzle and delight your loved ones wherever they may be with truly original flowers and gifts from 1-800-Flowers.com."
        },
        {
            title: 'Quick Flower Delivery and Great Customer Service',
            color: 'sky',
            description: `Same-day flower delivery is available every day, for all seasons: spring, winter, summer and fall. To send flowers for same-day delivery, all you have to do is place your order by the following times in the gift receiver's time zone: 11:30 p.m. weekdays, 4:15 p.m. Saturdays, and 10:45 a.m. Sundays. Our customer service team is standing by to help you with any gift or flower order. Whether you're sending red roses to your sweetie, celebrating a birthday, or sending a get well gift to someone feeling under the weather, if you have questions, our team has answers! Just call 0-000-0000 or place an order for flower delivery online. We will help you find and deliver the perfect flowers, plants, or gift to celebrate life's most meaningful moments - from birthday gift recommendations, to anniversary floral arrangements she is sure to love. For sympathy gifts and funeral flowers, our team of experienced Sympathy Advisors are ready to assist you at 0-000-0000-0.`
        },
        {
            title: 'Order the Best Flowers Online for All Occasions and Holidays',
            color: 'purple',
            description: `We're the best choice when shopping online for gifts and flowers just because, or for special occasions like Mother's Day or Valentine's Day. Choose the perfect gift from the best selection of flower arrangements, roses, mixed bouquets, fruit arrangements, gourmet baskets, and other gifts. With a wide variety of colors, sizes and seasonal themes, you can buy flowers and gifts for everyone. With same-day gift delivery, we're also your source for last-minute gifts, too! If you're on a budget but still want to send a thoughtful gesture, check out our selection of cheap flowers that deliver gorgeous blooms at a discount without compromising any of the quality.`
        },
        {
            title: 'Send Flowers Internationally',
            color: 'amber',
            description: `We deliver flowers across the United States and around the world. If you want to send flowers internationally, trust us to deliver your most heartfelt messages. Because of our partnerships with local florists and flower growers, we are able to ensure that bouquets are delivered fresh from the field and on time. Our flower arrangements are artfully created and delivered perfectly arranged by professional florists.`
        },
        {
            title: 'Fresh Flowers Guaranteed by Trusted Florists',
            color: 'blue',
            description: `In 2023, flowers Shop Developer, founder of Flowers shop, opened his first retail florist shop and forever changed the way people buy flowers for birthdays, anniversaries, and other special occasions. For more than 1.5 years, our passion has been to help you connect and express yourself to the important people in your life by providing the finest selection of beautiful flowers and arrangements available for same day or next day delivery, from roses and orchids to tulips, carnations, and daisies. With quality supported by our 100% Satisfaction Guarantee, you can also find plants, gift baskets, gourmet foods, and stuffed animals that are perfect for every occasion. Ranked consecutively on the Top 100 list of North America’s Leading Online Retailers by Digital Commerce 1012, FLOWERS SHOP, Inc. is proud to offer solutions for every gifting need, whether you're looking for flower delivery across town or across the country.`
        }
    ];
    return (
        <div className="space-y-4 p-2 md:p-6">
            <SectionTitle title="More About Our Flower Delivery" color="md:text-green-600  text-slate-900" textSize="md:text-3xl text-2xl" />
            {datas?.map((data, idx) => (
                <div key={idx} className="pt-4">
                    {/* header / Title */}
                    <div onClick={() => handleToggle(idx)} className={`px-4 md:px-8 py-6 ${idx === 0 ? 'bg-green-50 border-green-500' : idx === 1 ? 'bg-sky-50 border-sky-500' : idx === 2 ? 'bg-purple-50 border-purple-500' : idx === 3 ? 'bg-amber-50 border-amber-500' : idx === 4 ? 'bg-blue-50 border-blue-400' : 'bg-blue-100 border-blue-400'} border-l-[3px] cursor-pointer`}>
                        <div className="flex items-center">
                            <span>
                                <svg className={`mr-4 ${idx === 0 ? 'fill-green-900' : idx === 1 ? 'fill-sky-900' : idx === 2 ? 'fill-purple-900' : idx === 3 ? 'fill-amber-900' : idx === 4 ? 'fill-blue-900' : 'fill-orange-900'} shrink-0`} width="16" height="16" xmlns="http://www.w3.org/2000/svg"><rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} /><rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} /></svg>
                            </span>
                            <h4
                                className={`${idx === 0 ? 'text-green-900' : idx === 1 ? 'text-sky-900' : idx === 2 ? 'text-purple-900' : idx === 3 ? 'text-amber-900' : idx === 4 ? 'text-blue-900' : 'text-blue-900'} text-xl`}>
                                {data.title}
                            </h4>
                        </div>
                    </div>
                    {/* body / content  */}
                    <div className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                            <div className={`pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm  ${idx === 0 ? 'text-green-900 bg-green-50 border-green-500' : idx === 1 ? 'text-sky-900 bg-sky-50 border-sky-500' : idx === 2 ? 'text-purple-900 bg-purple-50 border-purple-500' : idx === 3 ? 'text-amber-900 bg-amber-50 border-amber-500' : idx === 4 ? 'text-blue-900 bg-blue-50 border-blue-500' : 'text-blue-900 bg-blue-50 border-blue-400'} `}>
                                {data?.description}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;