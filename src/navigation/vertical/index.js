const navigation = () => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'mdi:home-outline',
    },
    {
      title: 'Account Management',
      path: '/account-management',
      icon: 'mdi:email-outline',
    },
    {
      path: '/settings-preferences',
      // action: 'read',
      // subject: 'acl-page',
      title: 'Settings and Preferences',
      icon: 'mdi:shield-outline',
    },
    {
      title: 'Billing Section',
      path: '/billing',
      icon: 'mdi:email-outline',
    },
    {
      title: 'Usage',
      path: '/usage',
      icon: 'mdi:file-document-outline',
    },
    {
      title: 'Support and Feedback',
      path: '/support-feedback',
      icon: 'mdi:account-outline',
    },
    
  ]
}

export default navigation
