/**
 * The above functions fetch products and product details from a dummy JSON API asynchronously.
 * @param [searchQuery] - The `searchQuery` parameter in the `fetchProducts` function is used to
 * specify a search query for filtering products. If provided, only products matching the search query
 * will be returned. If not provided, all products will be fetched.
 * @param [page=1] - The `page` parameter in the `fetchProducts` function represents the page number of
 * results to retrieve from the API. It is used to paginate the results, allowing you to fetch a
 * specific page of products.
 * @param [pageSize=10] - The `pageSize` parameter in the `fetchProducts` function determines the
 * number of products to be fetched per page. It specifies how many products should be included in each
 * page of the results. In the provided code snippet, the default value for `pageSize` is set to 10,
 * meaning that by
 * @returns The `fetchProducts` function returns an array of products based on the search query, page
 * number, and page size provided. The `fetchProductDetails` function returns details of a specific
 * product based on the productId provided.
 */
/**
 * The function fetches products based on a search query, page number, and page size from a dummy JSON
 * API.
 * @param [searchQuery] - The `searchQuery` parameter is used to specify the search term for filtering
 * products. If provided, only products matching this search term will be returned in the response. If
 * not provided, all products will be returned.
 * @param [page=1] - The `page` parameter in the `fetchProducts` function represents the page number of
 * results to retrieve from the API. It is used to specify which page of results to fetch. For example,
 * if you have a large number of products and you want to display them in chunks or pages, you can
 * @param [pageSize=10] - The `pageSize` parameter in the `fetchProducts` function determines the
 * number of products to be fetched per page. In the provided code snippet, the default value for
 * `pageSize` is set to 10 if no value is provided when calling the function. This means that by
 * default, the function will
 * @returns The `fetchProducts` function returns an array of products fetched from a dummy API based on
 * the provided search query, page number, and page size.
 */
export const fetchProducts = async (
  searchQuery = '',
  page = 1,
  pageSize = 10,
) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchQuery}&_page=${page}&_limit=${pageSize}`,
    );
    const data = await response.json();
    return data.products;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};

/**
 * The function fetches product details for a given product ID from a dummy JSON API asynchronously.
 * @returns The function `fetchProductDetails` is returning the product details fetched from the API in
 * JSON format.
 */
export const fetchProductDetails = async productId => {
  try {
    const response = await fetch(`https://dummyjson.com/product/${productId}`);
    const data = await response.json();
    return data.product;
  } catch (error) {
    throw new Error('Failed to fetch product details');
  }
};
