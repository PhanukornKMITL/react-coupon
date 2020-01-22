import React,{Component} from 'react';
class Coupon extends Component{
    onCouponUse = (event) => {
        this.props.setCoupon();
    }
    render(){
        const status = this.props.data.status;
        const coupon = this.props.data.secretWord;
        return(
            <div className="mt-2 mx-auto">
                <div className="card">
                    <div className="card-header text-center">
                        <button
                        className="btn btn-success btn-sm" disabled={!status} onClick={this.onCouponUse}>ใช้คูปอง</button>
                    </div>
                    <div className="card-body">
                        <span className="mr-2">รหัสคูปอง :</span>
                        <span className="badge badge-secondary">
                            {status?coupon:'คูปองถูกใช้แล้ว'}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Coupon;