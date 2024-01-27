import './loading.css'
const Loading = () => {
    return (
       <div className='translate-y-1/2'>
         <div className='flex items-center justify-center h-full md:pt-28'>
            <div className="loader">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
            </div>
        </div>
       </div>
    );
};

export default Loading;