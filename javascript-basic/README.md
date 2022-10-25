4. Phân biệt let, var, const trong javascript:

- var: globally scoped (trừ trường hợp được khai báo trong function, khi đó là function/locally scoped),
  có tính chất hoisting: dù khai báo ở đâu thì biến đó sẽ được đem lên đầu scope trước khi thực hiện.
- let: block scoped, mỗi biến trong các block khác nhau được xem là một biến riêng biệt; có tính chất
  hoisting giống var (var được khởi tạo là undefined, let sẽ không có bất kì giá trị khởi tạo nào => sử dụng
  let trước khi khai báo sẽ gặp lỗi Reference Error).
- const: nếu kiểu biến là primitive (string, number, boolean, null, undefined) thì không thể tái
  khai báo hay cập nhập giá trị mới, đối với kiểu biến reference (array, object, function) tuy không thể
  tái khai báo hay cập nhật giá trị của biến nhưng chúng ta vẫn có thể cập nhật giá trị cho thuộc tính của biến đó.

5. Phân biệt tham chiếu và tham trị

- Tham trị: áp dụng cho kiểu dữ liệu nguyên thủy, khi ta gán biến này cho biến kia thì giá trị của 2 biến hoàn toàn độc lập.
- Tham chiếu: áp dụng đối với object, khi gán hoặc copy giá trị thì nó chỉ lưu giá trị ở dạng địa chỉ vùng nhớ trên RAM, nơi mà dùng để lưu giá trị đó.

6. Phân biệt callback, async await, Promise

- Callback có thể hiểu là một hàm được truyền vào hàm khác như một tham số. Khi ta gọi một tác vụ bất đồng bộ để thực hiện một hành động dài, sau khi hành động đó được thực hiện xong, có kết quả, thì hàm callback sẽ được gọi.
- Promise dùng để xử lý bất đồng bộ tương tự callback nhưng giúp ta tránh được hiện tượng callback hell. Promise dùng để xử lý bất đồng bộ của một tác vụ.
  Một promise có 3 trạng thái:
  - Pending: Trạng thái khởi tạo của một promise khi bắt đầu tác vụ bất đồng bộ
  - Fulfilled: Tác vụ kết thúc, tác vụ thực hiện thành công và trả về giá trị
  - Rejected: Tác vụ kết thúc, tác vụ thực hiện thất bại, trả về Error object
- Asyn/await là bước tiến hoá tiếp theo trong việc xử lý bất đồng bộ trong JS.
  - Async function là hàm trả về một promise. Nếu hàm trả về giá trị thì promise sẽ resolve với giá trị đó, nếu hàm async trả về lỗi thì promise sẽ reject.
  - Await là từ khoá được sử dụng bên trong hàm async để đảm bảo tất cả các promise bên trong async function trở nên đồng bộ.

7. Phân biệt sự khác nhau giữa for, map, forEach

- forEach: thực thi hàm đã được cung cấp trên mỗi phần tử của mảng.
  forEach() thích hợp hơn khi bạn không muốn thay đổi dữ liệu trong mảng, thay vào đó ta chỉ muốn làm gì đó với nó, chẳng hạn lưu vào cơ sở dữ liệu hay in ra màn hình console:
- map: tạo một mảng mới là tập hợp những kết quả của việc gọi hàm được cung cấp trên mỗi phần tử của mảng.
  map() sẽ phù hợp khi ta muốn thay đổi dữ liệu ra một mảng mới và có tốc độ tốt hơn. Điều đó cho phép chúng ta có thể gọi một chuỗi các phương thức ( map(), filter(), reduce(), …)
  map() cấp phát bộ nhớ và lưu trữ các giá trị trả về. forEach() bỏ qua các giá trị trả về.
  forEach() sẽ nhận một hàm callback để thay đổi mảng hiện tại, thay vào đó map() sẽ trả về một mảng mới.

- for:
  - for/in, for: cho chúng ta truy cập đến giá trị index trong array, không phải giá trị element trong array
  - for/of: sẽ truy xuất đến phần tử trong array

8. Phân biệt sự khác nhau giữa some, every

- every(): tất cả các phần tử trong mảng thỏa mãn một hay nhiều điều kiện mới return True
- some(): chỉ cần có một phần tử trong mảng thỏa điều kiện là return True

9. Phân biệt worker, child process

- Worker threads là một module trong node.js cho phép chạy mã Javascript song song với luồng chính. Mỗi worker được chạy độc lập với nhau, tuy nhiên chúng có thể giao tiếp với nhau thông qua postMessage().
- Child process là cách triển khai khác để chạy mã Javascript trên một luồng khác. Bằng cách tạo ra một process riêng biệt với triển khai đầy đủ của một event loop + một main thread cho nên điều này gây ra một yêu cầu tài nguyên lớn cho mỗi process được tạo ra. Mặt khác, vì mỗi process là độc lập về bộ nhớ cho nên việc giao tiếp giữa các process tương đối phức tạp.
- Worker threads được sinh ra để giải quyết bài toán về chi phí tài nguyên sử dụng của Child Process. Thay vì tạo một process mới, worker threads tạo ra một thread mới trong chính process của ứng dụng đang chạy. Điều này giúp giảm thiểu tài nguyên, vì tài nguyên để tạo một thread là nhỏ hơn so với process. Mặc khác các thread có tài nguyên sử dụng chung nên việc giao tiếp giữa chúng tương đối dễ dàng.

10. Blocking, non blocking, vì sao Nodejs chạy đơn luồng mà không bị blocking.

- Blocking, phương pháp thực thi đồng bộ, chương trình được thực hiện tuần tự
- Non-Blocking, các dòng lệnh không nhất thiết phải lúc nào cũng phải thực hiện một cách tuần tự (sequential) và đồng bộ (synchronous) với nhau.
- Nodejs chạy đơn luồng mà không bị blocking do sử dụng cơ chế event loop
- Vòng lặp sự kiện(event loop) sẽ kiểm tra xem ngăn xếp(call stack) cuộc gọi có trống không và nếu có, sẽ xem xét hàng đợi sự kiện (event queue).
- Nếu có một cái gì đó trong đó, nó thêm nó vào ngăn xếp(call stack) cuộc gọi và thực hiện nó.
- Vòng lặp sự kiện(event loop) liên tục chạy cho đến khi hết ca (nội dung trình duyệt được tải / trình duyệt bị đóng). Event table theo dõi tất cả các sự kiện đã được kích hoạt và gửi chúng đến hàng đợi sự kiện(event queue) sẽ được thực thi.
