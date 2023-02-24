const { Schema, model } = require('mongoose');

const adminAuthSchema = new Schema(
  { email: String, password: String },
  { versionKey: false, capped: 1 }
);

const AdminAuth = model('admin_auth', adminAuthSchema);

module.exports = AdminAuth;
