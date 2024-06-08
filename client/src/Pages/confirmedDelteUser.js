import Swal from "sweetalert2";

const confirmedDelteUser = async () => {
  const result = await Swal.fire({
    title: `Are you sure,</br> You want to Delete this User?`,
    text: "You won't be able to revert this!",
    icon: "warning",
    background:"#030712",
    color:"#fff",
    showCancelButton: true,
    confirmButtonColor: "red",
    cancelButtonColor: "#32CD32",
    confirmButtonText: "Yes, delete it!",
  });

  return result.isConfirmed;
};

export default confirmedDelteUser;
