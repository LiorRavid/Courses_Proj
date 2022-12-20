import React from "react";
import { MutatingDots } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="Loader">
            <MutatingDots
                height="100"
                width="100"
                color="#ee6c4d"
                secondaryColor="#ee6c4d"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loader;
