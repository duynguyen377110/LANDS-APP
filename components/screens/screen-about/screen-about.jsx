import { ScrollView, View, Text, Image } from "react-native";

import CommonHeader from "../../common/common-header/common-header";
import styles from "./screen-about-style";

const banner = 'https://res.cloudinary.com/ditc3z3gj/image/upload/v1711420399/lands/banner-about_yl9kf0.jpg';

const ScreenAbout = (props) => {

    return (
        <ScrollView style={{backgroundColor: '#ffffff'}}>
            <CommonHeader
                backButtonShow={true}
                navigation={props.navigation}/>

            <View style={[styles.screenAboutComponent]}>
                <View style={[styles.aboutPoster]}>
                    <Image
                        style={[styles.aboutThumb]}
                        source={{uri: banner}} />
                </View>

                <Text style={[styles.aboutSubDesc]}>
                    Chào mừng đến với LANDS, nơi tinh hoa của sự sáng tạo và cam kết vững chắc hội tụ để tạo ra những không gian sống và làm việc tuyệt vời nhất. Với hơn một thập kỷ hoạt động trong ngành bất động sản, chúng tôi tự hào là một trong những đơn vị hàng đầu trong việc cung cấp giải pháp bất động sản toàn diện, từ phát triển dự án đến quản lý tài sản.
                </Text>

                <Text style={[styles.aboutSubTitle]}>Sứ Mệnh Và Tầm Nhìn</Text>
                <Text style={[styles.aboutSubDesc]}>
                    Sứ mệnh của chúng tôi không chỉ là xây dựng các công trình, mà còn là tạo ra những không gian sống tinh tế và tiện nghi, nơi mà mọi người có thể tận hưởng cuộc sống và sự nghiệp của mình một cách trọn vẹn nhất. Chúng tôi cam kết mang lại giá trị cao nhất cho cộng đồng thông qua việc phát triển bền vững và cải thiện chất lượng cuộc sống.
                    Tầm nhìn của chúng tôi không chỉ dừng lại ở việc trở thành một doanh nghiệp thành công mà còn là trở thành đối tác đáng tin cậy và tiên phong trong ngành bất động sản. Chúng tôi hướng đến việc tạo ra những dấu ấn độc đáo, mang lại giá trị lâu dài cho cả khách hàng và cộng đồng.
                </Text>


                <Text style={[styles.aboutSubTitle]}>Chúng Tôi Là Ai?</Text>
                <Text style={[styles.aboutSubDesc]}>
                    Tại LANDS, chúng tôi là một đội ngũ đa dạng và đam mê, được thúc đẩy bởi niềm đam mê chung để đem lại sự khác biệt trong mỗi dự án chúng tôi thực hiện. Với sự tự tin và kiến thức sâu rộng về thị trường bất động sản, chúng tôi luôn đặt mục tiêu cao và không ngừng nỗ lực để đạt được chúng.
                </Text>

                <Text style={[styles.aboutSubTitle]}>Liên Hệ Với Chúng Tôi</Text>
                <Text style={[styles.aboutSubDesc]}>
                    Hãy để LANDS trở thành đối tác tin cậy của bạn trong mọi dự án bất động sản. Để biết thêm thông tin và tư vấn, vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại được cung cấp trên trang web. Chúng tôi rất vui được phục vụ bạn và cùng nhau tạo nên những thành công lớn!
                </Text>

            </View>
        </ScrollView>
    )
}

export default ScreenAbout;