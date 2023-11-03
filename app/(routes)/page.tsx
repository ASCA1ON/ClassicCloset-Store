import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard(`${process.env.ADMIN_Billboard_ID}`);

  return (
    <Container>
      <div className="space-y-10 pb-20">
        {billboard && <Billboard data={billboard} />}

        {/* {billboard ? (
          <Billboard data={billboard} />
        ) : (
          <div className="mx-auto py-10">
            <p className="text-center text-black">No store billboard found</p>
          </div>
        )} */}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
