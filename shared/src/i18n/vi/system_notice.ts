import type { TranslationStrings } from '../types';

const system_notice: TranslationStrings = {
  'system_notice.v3_photos.title': 'Ảnh đã được chuyển trong phiên bản 3.0',
  'system_notice.v3_photos.body':
    '**Ảnh** trong Trình lập kế hoạch chuyến đi đã được gỡ bỏ. Ảnh của bạn vẫn an toàn — TREK không bao giờ thay đổi thư viện Immich hoặc Synology của bạn.\n\nẢnh giờ nằm trong addon **Journey**. Journey là tùy chọn — nếu chưa có sẵn, hãy nhờ quản trị viên bật nó trong Quản trị → Addon.',
  'system_notice.v3_journey.title': 'Giới thiệu Journey — nhật ký du lịch',
  'system_notice.v3_journey.body':
    'Ghi lại các chuyến đi của bạn thành những câu chuyện du lịch sinh động với dòng thời gian, thư viện ảnh và bản đồ tương tác.',
  'system_notice.v3_journey.cta_label': 'Mở Journey',
  'system_notice.v3_journey.highlight_timeline': 'Dòng thời gian & thư viện theo từng ngày',
  'system_notice.v3_journey.highlight_photos': 'Nhập từ Immich hoặc Synology',
  'system_notice.v3_journey.highlight_share': 'Chia sẻ công khai — không cần đăng nhập',
  'system_notice.v3_journey.highlight_export': 'Xuất thành sách ảnh PDF',
  'system_notice.v3_features.title': 'Thêm điểm nổi bật trong 3.0',
  'system_notice.v3_features.body': 'Một vài điều đáng biết khác về bản phát hành này.',
  'system_notice.v3_features.highlight_dashboard': 'Thiết kế lại bảng điều khiển ưu tiên di động',
  'system_notice.v3_features.highlight_offline': 'Chế độ ngoại tuyến đầy đủ dưới dạng PWA',
  'system_notice.v3_features.highlight_search': 'Gợi ý tìm kiếm địa điểm theo thời gian thực',
  'system_notice.v3_features.highlight_import': 'Nhập địa điểm từ tệp KMZ/KML',
  'system_notice.v3_mcp.title': 'MCP: Nâng cấp OAuth 2.1',
  'system_notice.v3_mcp.body':
    'Tích hợp MCP đã được làm lại hoàn toàn. OAuth 2.1 giờ là phương thức xác thực được khuyến nghị. Các token tĩnh cũ (trek_…) đã lỗi thời và sẽ bị gỡ bỏ trong bản phát hành tương lai.',
  'system_notice.v3_mcp.highlight_oauth': 'Khuyến nghị OAuth 2.1 (mcp-remote)',
  'system_notice.v3_mcp.highlight_scopes': '24 phạm vi quyền chi tiết',
  'system_notice.v3_mcp.highlight_deprecated': 'Token tĩnh trek_ đã lỗi thời',
  'system_notice.v3_mcp.highlight_tools': 'Mở rộng bộ công cụ & lời nhắc',
  'system_notice.v3_thankyou.title': 'Một lời nhắn cá nhân từ tôi',
  'system_notice.v3_thankyou.body':
    'Trước khi bạn đi tiếp — tôi muốn dành một chút thời gian.\n\nTREK khởi đầu là một dự án phụ tôi xây cho những chuyến đi của riêng mình. Tôi chưa bao giờ tưởng tượng nó sẽ phát triển thành thứ mà 4.000 người trong số các bạn nay tin tưởng để lên kế hoạch cho những cuộc phiêu lưu. Mỗi ngôi sao, mỗi báo lỗi, mỗi yêu cầu tính năng — tôi đều đọc hết, và chúng tiếp thêm động lực cho tôi qua những đêm khuya giữa một công việc toàn thời gian và việc học đại học.\n\nTôi muốn bạn biết: TREK sẽ luôn là mã nguồn mở, luôn tự host, luôn thuộc về bạn. Không theo dõi, không thuê bao, không ràng buộc. Chỉ là một công cụ được tạo bởi một người yêu du lịch nhiều như bạn.\n\nĐặc biệt cảm ơn [jubnl](https://github.com/jubnl) — bạn đã trở thành một cộng sự tuyệt vời. Rất nhiều điều làm nên sự tuyệt vời của 3.0 mang dấu ấn của bạn. Cảm ơn vì đã tin vào dự án này khi nó còn thô sơ.\n\nVà với từng người trong các bạn đã báo lỗi, dịch một dòng chữ, chia sẻ TREK với bạn bè, hay đơn giản là dùng nó để lên kế hoạch cho một chuyến đi — **cảm ơn bạn**. Bạn chính là lý do TREK tồn tại.\n\nChúc cho thật nhiều cuộc phiêu lưu nữa cùng nhau.\n\n— Maurice\n\n---\n\n[Tham gia cộng đồng trên Discord](https://discord.gg/7Q6M6jDwzf)\n\nNếu TREK làm cho những chuyến đi của bạn tốt hơn, một [ly cà phê nhỏ](https://ko-fi.com/mauriceboe) luôn giúp giữ ánh đèn sáng.',
  'system_notice.v3014_whitespace_collision.title': 'Cần hành động: xung đột tài khoản người dùng',
  'system_notice.v3014_whitespace_collision.body':
    'Bản nâng cấp 3.0.14 đã phát hiện một hoặc nhiều xung đột tên đăng nhập hoặc email do khoảng trắng ở đầu/cuối trong các tài khoản đã lưu. Các tài khoản bị ảnh hưởng đã được tự động đổi tên. Kiểm tra nhật ký máy chủ để tìm các dòng bắt đầu bằng **[migration] WHITESPACE COLLISION** nhằm xác định tài khoản nào cần xem xét.',
  'system_notice.welcome_v1.title': 'Chào mừng đến với TREK',
  'system_notice.welcome_v1.body':
    'Trình lập kế hoạch du lịch tất cả trong một của bạn. Tạo lịch trình, chia sẻ chuyến đi với bạn bè và luôn ngăn nắp — trực tuyến hay ngoại tuyến.',
  'system_notice.welcome_v1.cta_label': 'Lên kế hoạch chuyến đi',
  'system_notice.welcome_v1.hero_alt': 'Một điểm đến du lịch đẹp với lớp phủ giao diện lập kế hoạch của TREK',
  'system_notice.welcome_v1.highlight_plan': 'Lịch trình theo từng ngày cho mọi chuyến đi',
  'system_notice.welcome_v1.highlight_share': 'Cộng tác với bạn đồng hành',
  'system_notice.welcome_v1.highlight_offline': 'Hoạt động ngoại tuyến trên di động',
  'system_notice.dev_test_modal.title': '[Dev] Thông báo thử',
  'system_notice.dev_test_modal.body': 'Đây là thông báo thử chỉ dành cho dev.',
  // Thank-you + support the project (shown once per install and once per upgrade)
  'system_notice.thank_you_support.title': 'Cảm ơn bạn đã dùng TREK',
  'system_notice.thank_you_support.body':
    'Một lời cảm ơn nhanh vì đã cài đặt TREK — điều đó thực sự rất ý nghĩa.\n\nTôi là một lập trình viên đơn độc và xây TREK trong thời gian rảnh. Nó khởi đầu là một công cụ nhỏ chỉ cho những chuyến đi của riêng tôi, và thật lòng tôi vô cùng ngỡ ngàng trước sự ủng hộ và quan tâm từ cộng đồng kể từ đó. TREK được làm bằng rất nhiều tâm huyết của tôi — nhưng cũng nhờ vào rất nhiều người đóng góp bên ngoài tuyệt vời đã giúp định hình nó.\n\n**TREK là mã nguồn mở và hoàn toàn miễn phí — và sẽ mãi như vậy. Không có gói trả phí, không thuê bao, không cạm bẫy. Tôi hứa.**\n\nNếu TREK hữu ích với bạn và bạn muốn ủng hộ sự phát triển của nó, một ly cà phê nhỏ thực sự giúp tôi tiếp tục — hoàn toàn không áp lực, nhưng mỗi tách cà phê giúp duy trì những đêm khuya.\n\nCảm ơn vì đã ở đây.\n\n— Maurice',
  'system_notice.thank_you_support.highlight_opensource': '100% mã nguồn mở trên GitHub',
  'system_notice.thank_you_support.highlight_free': 'Miễn phí mãi mãi — không bao giờ có gói trả phí',
  'system_notice.thank_you_support.highlight_community': 'Cùng xây dựng với cộng đồng',
  'system_notice.thank_you_support.cta_bmc': 'Buy Me a Coffee',
  'system_notice.thank_you_support.cta_kofi': 'Ủng hộ trên Ko-fi',
  'system_notice.pager.prev': 'Thông báo trước',
  'system_notice.pager.next': 'Thông báo sau',
  'system_notice.pager.counter': '{current} / {total}',
  'system_notice.pager.goto': 'Đến thông báo {n}',
  'system_notice.pager.position': 'Thông báo {current} trên {total}',
};
export default system_notice;
