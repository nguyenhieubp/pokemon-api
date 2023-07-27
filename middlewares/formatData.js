export default function formatData(req, res, next) {
  const oldJson = res.json;

  res.json = function (data) {
    if (res.success !== false) {
      // Chỉ định dạng nếu res.success không phải là false
      arguments[0] = {
        status: 200,
        message: "success",
        result: data,
      };
    }

    oldJson.apply(res, arguments);
  };

  next();
}
