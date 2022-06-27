import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setCurrentChat } from "../../redux/chatReducer";
import { setCurrenFood } from "../../redux/foodReducer";
import { setCurrentPost } from "../../redux/postReducer";
import { setSelectedUserProfile } from "../../redux/userReducer";

const Navigators = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const navigateToDetailRecipe = (recipe) => {
    dispatch(setCurrenFood(recipe));
    navigation.navigate("DetailRecipe");
  };

  const navigateToDetailPost = (post) => {
    dispatch(setCurrentPost(post));
    navigation.navigate("DetailedPost");
  };

  const navigateToDetailChat = (chat) => {
    dispatch(setCurrentChat(chat));
    navigation.navigate("DetailChat");
  };

  const navigateToAccount = () => {
    navigation.navigate("Account");
  };

  const navigateToPersonalPage = (profile) => {
    dispatch(setSelectedUserProfile(profile));
    navigation.navigate("PersonalPage");
  };

  const navigateToChat = () => {
    navigation.navigate("ChatNavigation");
  };

  const navigateToSearch = () => {
    navigation.navigate("Search");
  };

  const navigateToHomePage = () => {
    navigation.navigate("HomePage");
  };

  const navigateToNewRecipe = () => {
    navigation.navigate("NewRecipe");
  };

  const navigateToEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  const navigateToChangePassword = () => {
    navigation.navigate("ChangePassword");
  };
  const navigateToFeedBack = () => {
    navigation.navigate("Feedback");
  };

  const navigateToTermOfService = () => {
    navigation.navigate("TermOfService");
  };

  const navigateToMoreSetting = () => {
    navigation.navigate("MoreSetting");
  };

  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const navigateToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const navigateToNewPost = () => {
    navigation.navigate("NewPost");
  };

  const navigateToUserReaction = (post_id) => {
    navigation.navigate("UserReactionList", { post_id: post_id });
  };

  const navigateToCommentList = (post_id) => {
    navigation.navigate("CommentList", { post_id: post_id });
  };

  return {
    navigateToCommentList,
    navigateToUserReaction,
    navigateToNewPost,
    navigateToForgotPassword,
    navigateToSignUp,
    navigateToMoreSetting,
    navigateToTermOfService,
    navigateToFeedBack,
    navigateToChangePassword,
    navigateToEditProfile,
    navigateToNewRecipe,
    navigateToHomePage,
    navigateToSearch,
    navigateToChat,
    navigateToPersonalPage,
    navigateToAccount,
    navigateToDetailRecipe,
    navigateToDetailPost,
    navigateToDetailChat,
  };
};

export default Navigators;
