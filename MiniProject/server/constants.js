const ROLES_LIST = {
  Teacher: 1,
  Parent: 2,
  // Student: 3,
};

const ROLE_GROUPS = {
  TeacherGroup: [ROLES_LIST.Teacher],
  // ParentGroup: [ROLES_LIST.Role2, ROLES_LIST.Role3],
  // StudentGroup: [ROLES_LIST.Role1, ROLES_LIST.Role2, ROLES_LIST.Role3],
  ParentGroup: [ROLES_LIST.Parent, ROLES_LIST.Teacher],
};

module.exports = {
  ROLES_LIST,
  ROLE_GROUPS,
};
