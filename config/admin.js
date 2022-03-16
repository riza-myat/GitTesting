module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4eb5f05c536d98fe770097850dc3a679'),
  },
});
