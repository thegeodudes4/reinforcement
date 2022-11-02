import axios from 'axios';

export const loginOrCreateAccount = async (JWT: string) => {
  try {
    const response = await axios.post(`userAPI/signup`, {JWT});
    return response.data;
  } catch (error: any) {
    return error;
  }
};

// export const getUserDeps = async (): Promise<
//   [string, AllDependenciesBuilds[]]
// > => {
//   try {
//     const response = await axios.get(`webAPI/userDeps`);
//     return response.data;
//   } catch (error: any) {
//     return error;
//   }
// };

// /**
//  * function to let user set dependencies to track
//  * @param depPrefs - {@link AddedTrackedDependency}
//  * @returns A promise that resolves to an Axios Response Object
//  * @example
//  * Example response:
//  * ```
//  * response.data = 'Dependency preferences updated'
//  * ```
//  */
// export const postUserDepPrefs = async (
//   depPrefs: AddedTrackedDependency[]
// ): Promise<string> => {
//   try {
//     const response = await axios.post(`webAPI/userDeps`, {
//       depPrefs,
//     });
//     return response.data;
//   } catch (error: any) {
//     return error;
//   }
// };
// export const deleteUserRepoApi = async () => {};
