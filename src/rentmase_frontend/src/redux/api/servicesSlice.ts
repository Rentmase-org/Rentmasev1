
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    authenticate: builder.mutation({
      query: ({audience}) => ({
        url: "/auth/get-access-token",
        method: "POST",
        body: { audience },
      }),
    }),
    logout : builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    topUpAirtime : builder.mutation({
      query: (data) => ({
        url: "/topup-airtime",
        method: "POST",
        body: data,
      }),
    }),
    getOperators: builder.query({
      query: () => "/get-operators"
    }),
    getCountryOperaters: builder.query({
      query: ({ countryCode }) => ({
        url: `/country-operators`, 
        params: { countryCode}, 
      }),
    }),
    getNumberOperators: builder.query({
      query: ({countryCode, phoneNumber, iso}) => ({
        url: `/number-operator`, 
        params: {countryCode, phoneNumber, iso}, 
      }),
    }),
    getCouuntryGiftCards: builder.query({
      query: ({countryCode}) => ({
        url: `/country-giftcards`, 
        params: {countryCode}, 
      }),
    }),
    buyGiftCard : builder.mutation({
      query: (data) => ({
        url: "/buy-giftcard",
        method: "POST",
        body: data,
      }),
    }),
    payBill : builder.mutation({
      query: (data) => ({
        url: "/pay-bill",
        method: "POST",
        body: data,
      }),
    }),
    getBillers: builder.query({
      query: ({countryCode}) => ({
        url: `/billers`, 
        params: {countryCode}, 
      }),
    }),
    getPairEchangeRate: builder.query({
      query: ({curr1, curr2}) => ({
        url: `/pair-exchange-rate`, 
        params: {curr1, curr2}, 
      }),
    }),
  }),
});

export const {
  useAuthenticateMutation,
  useLogoutMutation,
  useTopUpAirtimeMutation,
  useGetOperatorsQuery,
  useLazyGetCountryOperatersQuery,
  useLazyGetNumberOperatorsQuery,
  useLazyGetCouuntryGiftCardsQuery,
  useBuyGiftCardMutation,
  usePayBillMutation,
  useLazyGetBillersQuery,
  useLazyGetPairEchangeRateQuery,
} = usersApiSlice;
