import type { TranslationStrings } from '../types';

const packing: TranslationStrings = {
  'packing.title': 'Danh sách hành lý',
  'packing.empty': 'Danh sách hành lý trống',
  'packing.import': 'Nhập',
  'packing.importTitle': 'Nhập danh sách hành lý',
  'packing.importHint':
    'Mỗi dòng một vật dụng. Định dạng: Danh mục, Tên, Khối lượng (g, tùy chọn), Túi (tùy chọn), checked/unchecked (tùy chọn)',
  'packing.importPlaceholder':
    'Vệ sinh, Bàn chải\nQuần áo, Áo thun, 200\nGiấy tờ, Hộ chiếu, , Hành lý xách tay\nĐiện tử, Sạc, 50, Vali, checked',
  'packing.importCsv': 'Tải CSV/TXT',
  'packing.importAction': 'Nhập {count}',
  'packing.importSuccess': 'Đã nhập {count} vật dụng',
  'packing.importError': 'Nhập thất bại',
  'packing.importEmpty': 'Không có vật dụng để nhập',
  'packing.progress': 'Đã xếp {packed} trên {total} ({percent}%)',
  'packing.clearChecked': 'Xóa {count} đã đánh dấu',
  'packing.clearCheckedShort': 'Xóa {count}',
  'packing.suggestions': 'Gợi ý',
  'packing.suggestionsTitle': 'Thêm gợi ý',
  'packing.allSuggested': 'Đã thêm tất cả gợi ý',
  'packing.allPacked': 'Đã xếp hết!',
  'packing.addPlaceholder': 'Thêm vật dụng mới...',
  'packing.categoryPlaceholder': 'Danh mục...',
  'packing.filterAll': 'Tất cả',
  'packing.filterOpen': 'Chưa xong',
  'packing.filterDone': 'Đã xong',
  'packing.emptyTitle': 'Danh sách hành lý trống',
  'packing.emptyHint': 'Thêm vật dụng hoặc dùng gợi ý',
  'packing.emptyFiltered': 'Không có vật dụng nào khớp bộ lọc này',
  'packing.menuRename': 'Đổi tên',
  'packing.menuCheckAll': 'Đánh dấu tất cả',
  'packing.menuUncheckAll': 'Bỏ đánh dấu tất cả',
  'packing.menuDeleteCat': 'Xóa danh mục',
  'packing.noMembers': 'Không có thành viên chuyến đi',
  'packing.addItem': 'Thêm vật dụng',
  'packing.addItemPlaceholder': 'Tên vật dụng...',
  'packing.addCategory': 'Thêm danh mục',
  'packing.newCategoryPlaceholder': 'Tên danh mục (vd: Quần áo)',
  'packing.applyTemplate': 'Áp dụng mẫu',
  'packing.template': 'Mẫu',
  'packing.templateApplied': 'Đã thêm {count} vật dụng từ mẫu',
  'packing.templateError': 'Áp dụng mẫu thất bại',
  'packing.saveAsTemplate': 'Lưu thành mẫu',
  'packing.templateName': 'Tên mẫu',
  'packing.templateSaved': 'Đã lưu danh sách hành lý thành mẫu',
  'packing.bags': 'Túi',
  'packing.noBag': 'Chưa gán',
  'packing.totalWeight': 'Tổng khối lượng',
  'packing.bagName': 'Tên túi...',
  'packing.addBag': 'Thêm túi',
  'packing.changeCategory': 'Đổi danh mục',
  'packing.confirm.clearChecked': 'Bạn có chắc muốn xóa {count} vật dụng đã đánh dấu?',
  'packing.confirm.deleteCat': 'Bạn có chắc muốn xóa danh mục "{name}" với {count} vật dụng?',
  'packing.defaultCategory': 'Khác',
  'packing.toast.saveError': 'Lưu thất bại',
  'packing.toast.deleteError': 'Xóa thất bại',
  'packing.toast.renameError': 'Đổi tên thất bại',
  'packing.toast.addError': 'Thêm thất bại',
  'packing.suggestions.items': [
    {
      name: 'Hộ chiếu',
      category: 'Giấy tờ',
    },
    {
      name: 'Căn cước',
      category: 'Giấy tờ',
    },
    {
      name: 'Bảo hiểm du lịch',
      category: 'Giấy tờ',
    },
    {
      name: 'Vé máy bay',
      category: 'Giấy tờ',
    },
    {
      name: 'Thẻ tín dụng',
      category: 'Tài chính',
    },
    {
      name: 'Tiền mặt',
      category: 'Tài chính',
    },
    {
      name: 'Visa',
      category: 'Giấy tờ',
    },
    {
      name: 'Áo thun',
      category: 'Quần áo',
    },
    {
      name: 'Quần',
      category: 'Quần áo',
    },
    {
      name: 'Đồ lót',
      category: 'Quần áo',
    },
    {
      name: 'Tất',
      category: 'Quần áo',
    },
    {
      name: 'Áo khoác',
      category: 'Quần áo',
    },
    {
      name: 'Đồ ngủ',
      category: 'Quần áo',
    },
    {
      name: 'Đồ bơi',
      category: 'Quần áo',
    },
    {
      name: 'Áo mưa',
      category: 'Quần áo',
    },
    {
      name: 'Giày thoải mái',
      category: 'Quần áo',
    },
    {
      name: 'Bàn chải đánh răng',
      category: 'Đồ vệ sinh',
    },
    {
      name: 'Kem đánh răng',
      category: 'Đồ vệ sinh',
    },
    {
      name: 'Dầu gội',
      category: 'Đồ vệ sinh',
    },
    {
      name: 'Lăn khử mùi',
      category: 'Đồ vệ sinh',
    },
    {
      name: 'Kem chống nắng',
      category: 'Đồ vệ sinh',
    },
    {
      name: 'Dao cạo',
      category: 'Đồ vệ sinh',
    },
    {
      name: 'Sạc',
      category: 'Điện tử',
    },
    {
      name: 'Pin dự phòng',
      category: 'Điện tử',
    },
    {
      name: 'Tai nghe',
      category: 'Điện tử',
    },
    {
      name: 'Ổ cắm chuyển đổi',
      category: 'Điện tử',
    },
    {
      name: 'Máy ảnh',
      category: 'Điện tử',
    },
    {
      name: 'Thuốc giảm đau',
      category: 'Sức khỏe',
    },
    {
      name: 'Băng cá nhân',
      category: 'Sức khỏe',
    },
    {
      name: 'Dung dịch sát khuẩn',
      category: 'Sức khỏe',
    },
  ],
};
export default packing;
