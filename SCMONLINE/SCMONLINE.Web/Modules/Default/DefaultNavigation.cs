using Serenity.Navigation;
using MyPages = SCMONLINE.Default.Pages;

[assembly: NavigationLink(int.MaxValue, "Default/Procurement", typeof(MyPages.ProcurementController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Proc Participant", typeof(MyPages.ProcParticipantController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Proc Participant Item", typeof(MyPages.ProcParticipantItemController), icon: null)]