import React, {useEffect} from 'react';


const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Skill Share Home`;
    }, [title]);

};

export default useTitle;