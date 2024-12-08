export const useGetUserInfo = () => {
  const { userName, profilePhoto, userID, isAuth } = JSON.parse(
    localStorage.getItem("authInfo")
  );

  return { userName, profilePhoto, userID, isAuth };
};
