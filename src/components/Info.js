import React, { Component } from 'react';

class Info extends Component {
    render() {
        return (
            <div className='info'>
                <div>
                    
                    <h3 className='num'>۱۸,۲۷۳</h3>
                    <h4 className='descript'>تعداد کاربران</h4>
                </div>
                <div>
                    <h3 className='num'>۸۴,۵۳۸,۹۲۱,۰۶۷</h3>
                    <h4 className='descript'>ارزش معاملات (تومان)</h4>
                </div>
                <div>
                    <h3 className='num'>۷۲,۵۳۸</h3>
                    <h4 className='descript'>تعداد کل معاملات</h4>
                </div>
            </div>
        );
    }
}

export default Info;