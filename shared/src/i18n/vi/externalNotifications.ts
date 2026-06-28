import type { NotificationLocale } from '../externalNotifications/types';

const vi: NotificationLocale = {
  email: {
    footer: 'Bạn nhận được email này vì đã bật thông báo trong TREK.',
    manage: 'Quản lý tùy chọn trong Cài đặt',
    madeWith: 'Tạo bằng',
    openTrek: 'Mở TREK',
  },
  events: {
    trip_invite: (p) => ({
      title: `Lời mời chuyến đi: "${p.trip}"`,
      body: `${p.actor} đã mời ${p.invitee || 'một thành viên'} tham gia chuyến đi "${p.trip}".`,
    }),
    booking_change: (p) => ({
      title: `Đặt chỗ mới: ${p.booking}`,
      body: `${p.actor} đã thêm ${p.type} mới "${p.booking}" vào "${p.trip}".`,
    }),
    trip_reminder: (p) => ({
      title: `Nhắc nhở chuyến đi: ${p.trip}`,
      body: `Chuyến đi "${p.trip}" của bạn sắp đến rồi!`,
    }),
    todo_due: (p) => ({
      title: `Việc đến hạn: ${p.todo}`,
      body: `"${p.todo}" trong "${p.trip}" đến hạn vào ${p.due}.`,
    }),
    vacay_invite: (p) => ({
      title: 'Lời mời gộp kỳ nghỉ',
      body: `${p.actor} đã mời bạn gộp kế hoạch nghỉ. Mở TREK để chấp nhận hoặc từ chối.`,
    }),
    photos_shared: (p) => ({
      title: `Đã chia sẻ ${p.count} ảnh`,
      body: `${p.actor} đã chia sẻ ${p.count} ảnh trong "${p.trip}".`,
    }),
    collab_message: (p) => ({
      title: `Tin nhắn mới trong "${p.trip}"`,
      body: `${p.actor}: ${p.preview}`,
    }),
    packing_tagged: (p) => ({
      title: `Hành lý: ${p.category}`,
      body: `${p.actor} đã phân công bạn vào danh mục hành lý "${p.category}" trong "${p.trip}".`,
    }),
    version_available: (p) => ({
      title: 'Có phiên bản TREK mới',
      body: `TREK ${p.version} đã có sẵn. Vào bảng quản trị để cập nhật.`,
    }),
    synology_session_cleared: () => ({
      title: 'Đã xóa phiên Synology',
      body: 'Tài khoản hoặc URL Synology của bạn đã thay đổi. Bạn đã bị đăng xuất khỏi Synology Photos.',
    }),
  },
  passwordReset: {
    subject: 'Đặt lại mật khẩu của bạn',
    greeting: 'Chào',
    body: 'Chúng tôi nhận được yêu cầu đặt lại mật khẩu cho tài khoản TREK của bạn. Nhấp vào nút bên dưới để đặt mật khẩu mới.',
    ctaIntro: 'Đặt lại mật khẩu',
    expiry: 'Liên kết này hết hạn sau 60 phút.',
    ignore: 'Nếu bạn không yêu cầu điều này, hãy bỏ qua email này — mật khẩu của bạn sẽ không thay đổi.',
  },
};

export default vi;
