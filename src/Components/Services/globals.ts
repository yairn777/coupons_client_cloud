class Globals{
}
// globals
class DevelopmentGlobals extends Globals{
    public urls = {
        company: "http://localhost:8080/api/company",
        homePage:"http://localhost:8080/api/home",
        admin:"http://localhost:8080/api/admin",
        customer:"http://localhost:8080/api/customers"
      
          }
}

class ProductionGlobals extends Globals{
    public urls = {
       
        company: "https://couponsbackendcloud-production.up.railway.app/api/company",
        homePage:"https://couponsbackendcloud-production.up.railway.app/api/home",
        admin:"https://couponsbackendcloud-production.up.railway.app/api/admin",
        customer:"https://couponsbackendcloud-production.up.railway.app/api/customers"



    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;