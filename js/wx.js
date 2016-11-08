var appId = "";		//必填，公众号的唯一标识
var timestamp = "";	//// 必填，生成签名的时间戳
var nonceStr = "";	// 必填，生成签名的随机串
var signature = "";// 必填，签名，见附录1

$.ajax({
    type: 'POST',
	url: "/templets/html/launcher/getSignature.jsp",
	data: {},
	dataType: "json",
	success: function(data) {
	    appId = data.appId;
	    timestamp = data.timestamp;
	    nonceStr = data.nonceStr;
	    signature = data.signature;
    }
});


wx.config({
    debug: true,
    appId: appId,
    timestamp: timestamp,
    nonceStr: nonceStr,
    signature: signature,
    jsApiList: [
        'onMenuShareTimeline',	//分享
        'onMenuShareAppMessage',	//分享
        'scanQRCode', //二维码
        'chooseImage'//相机 相册
    ]
});

wx.ready(function () {
    //批量隐藏功能按钮接口
    wx.onMenuShareTimeline(shareData_p);
    wx.onMenuShareAppMessage(shareData);
});

button.onclick = function(){
	wx.scanQRCode({
        // 默认为0，扫描结果由微信处理，1则直接返回扫描结果
        needResult : 1,
        desc : 'scanQRCode desc',
        success : function(res) {
            //  调用成功
        }
    });
}
button2.onclick = function(){
	wx.chooseImage({
	    count: 1, // 默认9
	    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
	    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
	    success: function (res) {
	        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
	    }
	});
}