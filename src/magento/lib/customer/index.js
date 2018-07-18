import { CUSTOMER_TYPE } from '../../types';

export default magento => {
  return {
    getCurrentCustomer: () => {
      // GET /rest/V1/customers/me
      return new Promise((resolve, reject) => {
        const path = '/V1/customers/me';

        magento.get(path, undefined, undefined, CUSTOMER_TYPE)
          .then(data => {
            resolve(data);
          })
          .catch(e => {
            console.log(e);
            reject(e);
          });
      });
    }
  };
};
