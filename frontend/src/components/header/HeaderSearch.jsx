import React from 'react';

const HeaderSearch = ({ searchClose, openSearch }) => {
    return (
        <>
            <div className={`top-search ${openSearch ? "search-open " : "search-close"}`}>
                <div className="container">
                    <form>
                        <div className="input-group">
                            <span className="input-group-addon search-icon"><i className="fa fa-search"></i></span>
                            <input type="text" className="form-control" name='search' placeholder="Search" autoComplete='off' />
                            <span className="input-group-addon close-search" onClick={searchClose}><i className="fa fa-times"></i></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default HeaderSearch;