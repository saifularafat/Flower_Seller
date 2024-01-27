import './loading.css'
const Loading = () => {
    return (
         <div className='flex items-center justify-center h-screen'>
            <div className="loader">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
            </div>
        </div>
    );
};

export default Loading;